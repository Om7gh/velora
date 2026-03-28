export default function Separator({className}: {className?: string}) {
  return <div className={`w-full h-[0.1px] bg-foreground/20 ${className}`} />;
}
