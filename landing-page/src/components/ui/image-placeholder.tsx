type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Stand-in for photos that could not be exported from Figma yet.
 * Replace with <Image src="/images/..." /> once the file is in /public/images.
 */
export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-[repeating-linear-gradient(45deg,#cfd8d6_0_12px,#c3cecb_12px_24px)] text-center text-sm font-medium text-brand/70 ${className ?? ""}`}
    >
      <span className="rounded-full bg-white/70 px-3 py-1">{label}</span>
    </div>
  );
}
