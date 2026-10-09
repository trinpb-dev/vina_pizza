type Props = { as?: "h1" | "h2" | "h3", children: string, className?: string };
export function SectionHeading({ as: Tag = "h2", children, className = "" }: Props) {
  const parts = children.split(".");
  const text = parts.slice(0, -1).join(".");
  const hasDot = parts.length > 1 || children.endsWith(".");

  return (
    <Tag className={`font-playfair font-bold text-ink tracking-tight ${Tag === "h1" ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"} ${className}`}>
      {hasDot ? <>{text}<span className="text-accent">.</span></> : children}
    </Tag>
  );
}
