import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
	{
		title: "Frontend Developer",
		company: "Clinton Electronics",
		location: "Loves Park, Illinois, United States",
		period: "Mar 2025 - Present",
		description:
			"Remote from Dublin, Ireland. Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
		technologies: ["React", "TypeScript", "Redux", "Less", "Git", "GitHub", "Jira"]
	},
	{
		title: "Frontend Developer",
		company: "UHTEK Co.,Ltd.",
		location: "Bucheon, Gyeonggi, South Korea",
		period: "Feb 2024 - Feb 2025",
		description:
			"Built interactive components and optimized application performance while learning modern development practices.",
		technologies: ["React", "TypeScript", "Redux", "Less", "Git", "GitHub", "Jira"]
	}
];

export default function ExperienceSection() {
	const experienceCard = experiences.map((experience, index) => (
		<Card key={index} className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
			<CardHeader>
				<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<CardTitle className="text-foreground font-serif text-xl font-bold">{experience.title}</CardTitle>
						<CardDescription className="text-primary font-sans text-base font-medium">
							{experience.company}
						</CardDescription>
					</div>
					<div className="flex flex-col gap-1 sm:items-end">
						<div className="text-muted flex items-center text-sm">
							<Calendar className="mr-1 h-4 w-4" />
							{experience.period}
						</div>
						<div className="text-muted flex items-center text-sm">
							<MapPin className="mr-1 h-4 w-4" />
							{experience.location}
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-muted mb-4 font-sans">{experience.description}</p>
				<div className="flex flex-wrap gap-2">
					{experience.technologies.map((tech, techIndex) => (
						<Badge key={techIndex} className="font-sans">
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	));

	return (
		<section className="bg-muted/30 py-20">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="text-foreground mb-4 font-serif text-3xl font-bold sm:text-4xl">Professional Experience</h2>
					<p className="text-foreground/60 mx-auto max-w-2xl font-sans text-lg">
						Transforming Ideas into Interactive Solutions
					</p>
				</div>
				<div className="space-y-6">{experienceCard}</div>
			</div>
		</section>
	);
}
