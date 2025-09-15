import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
};

export function Button(props: ButtonProps) {
	const { children } = props;

	return (
		<button className="group bg-foreground hover:bg-foreground/90 text-primary inline-flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 shadow-xs">
			{children}
		</button>
	);
}
