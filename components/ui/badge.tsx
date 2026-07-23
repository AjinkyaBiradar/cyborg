import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-none px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border uppercase tracking-wider",
  {
    variants: {
      variant: {
        purple: "border-purple-500/40 bg-purple-950/40 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
        cyan: "border-cyan-500/40 bg-cyan-950/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]",
        crimson: "border-rose-500/40 bg-rose-950/40 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.2)]",
        outline: "border-slate-800 text-slate-400 bg-slate-950/60",
      },
    },
    defaultVariants: {
      variant: "purple",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
