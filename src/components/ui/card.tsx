import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardProps = {
	className?: string;
	children: ReactNode;
};

export function Card(props: CardProps) {
	const { className, children } = props;

	return (
		<div
			data-slot="card"
			className={cn("bg-secondary flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)}
		>
			{children}
		</div>
	);
}

export function CardHeader(props: CardProps) {
	const { className, children } = props;

	return (
		<div
			data-slot="card-header"
			className={cn(
				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 [.border-b]:pb-6",
				className
			)}
		>
			{children}
		</div>
	);
}

export function CardTitle(props: CardProps) {
	const { className, children } = props;

	return (
		<div data-slot="card-title" className={cn("leading-none font-semibold", className)}>
			{children}
		</div>
	);
}

export function CardDescription(props: CardProps) {
	const { className, children } = props;

	return (
		<div data-slot="card-description" className={cn("text-sm", className)}>
			{children}
		</div>
	);
}

export function CardContent(props: CardProps) {
	const { className, children } = props;

	return (
		<div data-slot="card-content" className={cn("px-6", className)}>
			{children}
		</div>
	);
}
