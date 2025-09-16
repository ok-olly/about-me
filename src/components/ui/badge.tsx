import { ReactNode } from "react";

type BadgeProps = {
	children: ReactNode;
	icon: ReactNode;
};

export function Badge(props: BadgeProps) {
	const { children, icon } = props;

	return (
		<div className="bg-foreground/20 hover:bg-foreground/30 flex h-26 w-22 flex-col items-center justify-center rounded-2xl p-4">
			{icon}
			<span className="mt-2 text-xs">{children}</span>
		</div>
	);
}
