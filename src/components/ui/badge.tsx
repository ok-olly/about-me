import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BadgeProps = {
	className?: string;
	children: ReactNode;
};

export function Badge(props: BadgeProps) {
	const { className, children } = props;

	return (
		<span
			data-slot="badge"
			className={cn(
				"bg-muted/30 text-primary inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap",
				className
			)}
		>
			{children}
		</span>
	);
}
