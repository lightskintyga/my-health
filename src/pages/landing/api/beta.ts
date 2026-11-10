const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "/api").replace(/\/$/, "");

export type BetaSignupPayload = {
  name: string;
  email: string;
  isAcceptRules: boolean;
};

export type BetaSignupResult = {
  id: number;
  message: string;
};

type BetaResponseBody = {
  ok?: boolean;
  error?: string | null;
  data?: {
    id?: number;
    message?: string;
  };
};

export class BetaSignupError extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "BetaSignupError";
    this.status = status;
  }
}

export async function signupForBeta(payload: BetaSignupPayload): Promise<BetaSignupResult> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/beta/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        is_accept_rules: payload.isAcceptRules,
      }),
    });
  } catch {
    throw new BetaSignupError(
      "Не удалось связаться с сервером. Проверьте подключение и попробуйте ещё раз.",
    );
  }

  const body = (await response.json().catch(() => null)) as BetaResponseBody | null;

  if (!response.ok || body?.ok === false) {
    if (response.status === 409) {
      throw new BetaSignupError(
        "Этот email уже записан на beta-тестирование. Мы напишем вам, когда начнётся тест.",
        409,
      );
    }

    if (response.status === 400) {
      throw new BetaSignupError(body?.error ?? "Нужно принять правила бета-тестирования.", 400);
    }

    if (response.status === 422) {
      throw new BetaSignupError("Проверьте имя и email: они заполнены неверно.", 422);
    }

    throw new BetaSignupError(
      body?.error ?? "Не удалось отправить заявку. Попробуйте ещё раз позже.",
      response.status,
    );
  }

  if (!body?.data || typeof body.data.id !== "number") {
    throw new BetaSignupError("Сервер вернул неожиданный ответ. Попробуйте ещё раз позже.");
  }

  return {
    id: body.data.id,
    message: body.data.message ?? "Заявка на бета-тестирование принята",
  };
}
