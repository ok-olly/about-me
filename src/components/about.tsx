"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="flex h-full flex-col justify-center gap-8 md:flex-row-reverse md:items-center">
			<Image
				alt="profile image"
				className="border-foreground mx-auto rounded-full border-2"
				src="/profile.jpg"
				width={240}
				height={240}
			/>
			<div>
				<div
					className={`transform transition-all delay-300 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					<h1 className="text-3xl font-bold">Olivia Lee</h1>
				</div>
				<div
					className={`transform transition-all delay-500 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					<span className="text-foreground/80 mt-4 mb-8 inline-block font-sans">
						<span className="font-bold">Frontend Developer</span> with hands-on experience in React, Redux, and modern
						web technologies. I focus on building clean, maintainable user interfaces and have nearly 2 years of
						experience collaborating with international teams.
					</span>
				</div>
				<div
					className={`transform transition-all delay-700 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					<a
						className="group bg-foreground hover:bg-foreground/90 text-primary inline-flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 font-sans shadow-xs"
						href="https://drive.google.com/file/d/1vGMTDDEl3_ia2O_IJYfGtOaGlOUetVbg/view?usp=share_link"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>Download My CV</span>
						<Download className="h-4 w-4 transition-transform group-hover:scale-110" />
					</a>
				</div>
			</div>
		</section>
	);
}
