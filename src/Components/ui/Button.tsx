import { ReactNode } from "react";

export function Button({
  type,
  label,
  className,
  onClick,
  disabled,
  htmlType = "button",
}: {
  type: "primary" | "secondary" | "logout";
  label: string | ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void | undefined | ((e: MouseEvent) => void);
  htmlType?: "button" | "submit" | "reset";
}) {
  if (type === "primary")
    return (
      <button
        type={htmlType}
        disabled={disabled}
        onClick={onClick}
        className={`bg-primary capitalize text-foreground px-6 py-3 rounded-xl  shadow-lg shadow-slate-900 font-semibold text-md hover:bg-primary/20 duration-150  hover:border-t-2 hover:border-secondary ${className}`}
      >
        {label}
      </button>
    );
  else if (type === "secondary")
    return (
      <button
        type={htmlType}
        onClick={onClick}
        disabled={disabled}
        className={`bg-surface border border-border px-6 py-3 rounded-xl text-lg text-md hover:bg-primary/20 duration-150  ${className}`}
      >
        {label}
      </button>
    );
  else if (type === "logout")
    return (
      <button
        type={htmlType}
        onClick={onClick}
        className="bg-background rounded-xl text-xs px-4 py-2  duration-150 cursor-pointer w-full"
      >
        {label}
      </button>
    );
}
