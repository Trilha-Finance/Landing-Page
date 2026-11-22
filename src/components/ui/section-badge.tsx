type SectionBadgeProps = {
  children: React.ReactNode;
  variant?: "mist" | "white" | "dark";
  className?: string;
};

const variants = {
  mist: { pill: "bg-mist text-brand", dot: "bg-brand" },
  white: { pill: "bg-white text-brand", dot: "bg-brand" },
  dark: { pill: "bg-black/25 text-white", dot: "bg-white" },
};

export function SectionBadge({ children, variant = "mist", className }: SectionBadgeProps) {
  const v = variants[variant];
  return (
    <span
      className={`inline-flex h-[38px] items-center gap-2.5 rounded-[50px] pl-[18px] pr-5 font-heading text-base tracking-[1.6px] ${v.pill} ${className ?? ""}`}
    >
      <span className={`size-2 rounded-[4px] ${v.dot}`} />
      {children}
    </span>
  );
}
