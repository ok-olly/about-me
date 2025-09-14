"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		// <section className="from-background to-muted/20 flex min-h-screen items-center justify-center bg-gradient-to-br pt-16">
		<section className="flex min-h-screen items-center justify-center pt-16">
			<div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
				<div className="space-y-8 text-center">
					<div className="mb-8 flex justify-center gap-8">
						<div
							className={`transform transition-all delay-200 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
						>
							<div className="bg-primary/10 text-primary animate-bounce rounded-full p-3">
								<Code className="h-6 w-6" />
							</div>
						</div>
						<div
							className={`transform transition-all delay-400 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
						>
							<div
								className="bg-primary/10 text-primary animate-bounce rounded-full p-3"
								style={{ animationDelay: "0.5s" }}
							>
								<Palette className="h-6 w-6" />
							</div>
						</div>
						<div
							className={`transform transition-all delay-600 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
						>
							<div
								className="bg-primary/10 text-primary animate-bounce rounded-full p-3"
								style={{ animationDelay: "1s" }}
							>
								<Zap className="h-6 w-6" />
							</div>
						</div>
					</div>
					<div
						className={`transform transition-all delay-300 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
					>
						<h1 className="text-foreground mb-6 font-serif text-4xl font-black sm:text-5xl lg:text-6xl">
							Olivia Lee
							<br />
						</h1>
					</div>
					<div
						className={`transform transition-all delay-500 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
					>
						<p className="text-foreground/60 mx-auto mb-8 max-w-2xl font-sans text-lg sm:text-xl">
							Frontend Developer | Passionate about Clean Code and Innovative Design
						</p>
					</div>
					<div
						className={`transform transition-all delay-700 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
					>
						<Link href="/projects">
							<Button>
								<span>View My Work</span>
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
