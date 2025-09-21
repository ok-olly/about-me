import { ReactNode } from "react";

type BadgeProps = {
	icon: ReactNode;
	name: string;
};

export function Badge(props: BadgeProps) {
	const { icon, name } = props;

	return (
		<div className="bg-foreground/20 hover:bg-foreground/30 flex h-26 w-22 flex-col items-center justify-center rounded-2xl p-4">
			{icon}
			<span className="mt-2 text-xs">{name}</span>
		</div>
	);
}
