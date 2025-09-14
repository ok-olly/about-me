"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils";

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="font-serif text-xl font-bold">
						Olivia Lee
					</Link>

					<div className="flex items-center gap-6">
						<div className="hidden items-center gap-6 md:flex">
							<Link
								href="/"
								className={cn(
									"hover:text-primary text-sm font-medium transition-colors",
									pathname === "/" ? "text-primary" : "text-muted"
								)}
							>
								Home
							</Link>
							<Link
								href="/projects"
								className={cn(
									"hover:text-primary text-sm font-medium transition-colors",
									pathname === "/projects" ? "text-primary" : "text-muted"
								)}
							>
								Projects
							</Link>
						</div>
						{/* <ThemeToggle /> */}
					</div>
				</div>
			</div>
		</nav>
	);
}
