import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";

export default function Home() {
	return (
		<div className="bg-background min-h-screen">
			<Navigation />
			<main>
				<HeroSection />
				<ExperienceSection />
				<ContactSection />
			</main>
		</div>
	);
}
