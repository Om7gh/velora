export function Button({
  type,
  label,
  onClick,
}: {
  type: 'primary' | 'secondary';
  label: string;
  onClick?: () => void | undefined;
}) {
  if (type === 'primary')
    return (
      <button
        onClick={onClick}
        className="bg-primary capitalize text-foreground px-6 py-3 rounded-xl  shadow-lg shadow-slate-900 font-semibold text-md hover:bg-primary/20 duration-150 cursor-pointer hover:border-t-2 hover:border-secondary"
      >
        {label}
      </button>
    );
  else if (type === 'secondary')
    return (
      <button className="bg-surface border border-border px-8 py-4 rounded-xl text-lg text-md hover:bg-primary/20 duration-150 cursor-pointer">
        {label}
      </button>
    );
}
