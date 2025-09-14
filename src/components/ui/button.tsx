import { ReactNode } from "react";

type buttonProps = {
	children: ReactNode;
};

export function Button(props: buttonProps) {
	const { children } = props;

	return (
		<button className="group bg-primary hover:bg-primary/90 text-background inline-flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 shadow-xs">
			{children}
		</button>
	);
}
