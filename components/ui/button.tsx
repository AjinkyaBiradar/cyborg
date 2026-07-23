import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-mono text-sm font-semibold tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden active:scale-[0.98]",
  {
    variants: {
      variant: {
        cyber:
          "bg-purple-600/20 text-purple-300 border border-purple-500/50 hover:bg-purple-600 hover:text-white hover:shadow-neon-purple clip-cyber-btn",
        cyan:
          "bg-cyan-600/20 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-500 hover:text-black hover:shadow-neon-cyan clip-cyber-btn",
        crimson:
          "bg-rose-600/20 text-rose-300 border border-rose-500/50 hover:bg-rose-600 hover:text-white hover:shadow-neon-rose clip-cyber-btn",
        outline:
          "border border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-600 hover:text-white hover:bg-slate-900",
        ghost:
          "text-slate-400 hover:bg-purple-950/30 hover:text-purple-300",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "cyber",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
