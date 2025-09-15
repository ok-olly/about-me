import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
	{
		title: "Frontend Developer",
		company: "Clinton Electronics",
		location: "Loves Park, Illinois, United States",
		period: "Mar 2025 - Present",
		description: "Remote from Dublin, Ireland. Lorem ipsum dolor sit amet consectetur adipisicing elit."
	},
	{
		title: "Frontend Developer",
		company: "UHTEK Co.,Ltd.",
		location: "Bucheon, Gyeonggi, South Korea",
		period: "Feb 2024 - Feb 2025",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
	}
];

export default function Experience() {
	const experienceCard = experiences.map(experience => {
		const { title, company, period, location, description } = experience;

		return (
			<Card key={period} className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
				<CardHeader>
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<CardTitle className="text-xl font-bold">{title}</CardTitle>
							<CardDescription className="font-sans text-base font-medium">{company}</CardDescription>
						</div>
						<div className="flex flex-col gap-1 sm:items-end">
							<div className="text-muted/60 flex items-center text-sm">
								<Calendar className="mr-1 h-4 w-4" />
								{period}
							</div>
							<div className="text-muted/60 flex items-center text-sm">
								<MapPin className="mr-1 h-4 w-4" />
								{location}
							</div>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-muted mb-4 font-sans">{description}</p>
				</CardContent>
			</Card>
		);
	});

	return (
		<section className="py-20">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-3xl font-bold sm:text-4xl">Professional Experience</h2>
					<p className="text-foreground/60 mx-auto max-w-2xl font-sans text-lg">
						Transforming Ideas into Interactive Solutions
					</p>
				</div>
				<div className="space-y-6">{experienceCard}</div>
			</div>
		</section>
	);
}
