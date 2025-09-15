import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
	return (
		<div className="min-h-dvh font-serif">
			<BackgroundGradientAnimation interactive={false}>
				<div className="absolute inset-0 left-1/2 z-50 h-dvh w-dvw -translate-x-1/2 p-4 sm:max-w-7xl">
					<div className="bg-background/40 flex h-full w-full overflow-hidden rounded-3xl">
						<main className="flex-1 overflow-y-scroll p-8 md:px-24">
							<About />
							<Skill />
							<Experience />
							<Contact />
						</main>
					</div>
				</div>
			</BackgroundGradientAnimation>
		</div>
	);
}
