export function Logo() {
  return (
    <div className="flex items-center ">
      <img src="/logo.png" className="w-20 h-12" />
      <span className="bg-linear-120 from-primary via-secondary to-accent bg-clip-text text-transparent text-xl">
        Velora
      </span>
    </div>
  );
}
