import { HeartPulse } from "lucide-react";

type BrandProps = {
  href?: string;
};

export function Brand({ href = "#top" }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label="MyHealth — на главную">
      <span className="brand-mark" aria-hidden="true"><HeartPulse size={20} /></span>
      <span className="brand-name">MyHealth</span>
    </a>
  );
}
