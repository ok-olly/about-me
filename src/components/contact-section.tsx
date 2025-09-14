import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export default function ContactSection() {
	return (
		<section className="bg-background py-20">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="text-foreground mb-4 font-serif text-3xl font-bold sm:text-4xl">Let&apos;s Work Together</h2>
					<p className="text-muted mx-auto max-w-2xl font-sans text-lg">
						Ready to bring your ideas to life? Let&apos;s connect and discuss your next project.
					</p>
				</div>

				<Card className="mx-auto max-w-2xl">
					<CardHeader className="text-center">
						<CardTitle className="font-serif text-2xl font-bold">Get In Touch</CardTitle>
						<CardDescription className="font-sans">
							I&apos;m always open to discussing new opportunities and interesting projects.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<Button variant="outline" className="group h-12 bg-transparent" asChild>
								<a href="mailto:your.email@example.com" className="flex items-center justify-center gap-2">
									<Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
									Email Me
								</a>
							</Button>

							<Button variant="outline" className="group h-12 bg-transparent" asChild>
								<a href="#" className="flex items-center justify-center gap-2">
									<Download className="h-4 w-4 transition-transform group-hover:scale-110" />
									Download CV
								</a>
							</Button>
						</div>

						<div className="flex justify-center gap-4 pt-4">
							<Button variant="ghost" size="icon" className="group" asChild>
								<a href="https://github.com" target="_blank" rel="noopener noreferrer">
									<Github className="h-5 w-5 transition-transform group-hover:scale-110" />
									<span className="sr-only">GitHub</span>
								</a>
							</Button>

							<Button variant="ghost" size="icon" className="group" asChild>
								<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
									<Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
									<span className="sr-only">LinkedIn</span>
								</a>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
