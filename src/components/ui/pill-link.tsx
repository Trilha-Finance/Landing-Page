import Image from "next/image";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Lime pill button with the round dark arrow badge used across the design. */
export function PillLink({ href, children, className }: PillLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex h-14 items-center gap-3 rounded-[40px] bg-lime pl-[30px] pr-2 text-base text-ink transition-colors hover:bg-[#b5f08f] ${className ?? ""}`}
    >
      {children}
      <span className="grid size-10 place-items-center rounded-[20px] bg-brand transition-transform group-hover:rotate-45">
        <Image
          src="/images/icons/arrow-up-right.svg"
          alt=""
          width={16}
          height={16}
          className="-rotate-30 -scale-y-100"
        />
      </span>
    </a>
  );
}
