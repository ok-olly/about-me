import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Linkedin, Mail } from "lucide-react";

export default function Contact() {
	return (
		<section className="pt-20">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">Let&apos;s Work Together</h2>
					<p className="text-foreground/60 mx-auto max-w-2xl font-sans text-lg">
						Ready to bring your ideas to life? Let&apos;s connect and discuss your next project.
					</p>
				</div>

				<Card className="mx-auto max-w-2xl">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl font-bold">Get In Touch</CardTitle>
						<CardDescription className="text-muted font-sans">
							I&apos;m always open to discussing new opportunities and interesting projects.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="grid grid-cols-1">
							<a
								className="group bg-foreground hover:bg-foreground/90 text-primary inline-flex cursor-pointer items-center justify-center gap-4 rounded-md px-4 py-2 font-sans shadow-xs"
								href="mailto:olivia.jeongok.lee@gmail.com"
							>
								<Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
								Email Me
							</a>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<a
								className="group bg-foreground hover:bg-foreground/90 text-primary inline-flex cursor-pointer items-center justify-center gap-4 rounded-md px-4 py-2 font-sans shadow-xs"
								href="https://github.com"
								rel="noopener noreferrer"
								target="_blank"
							>
								<SiGithub className="h-5 w-5 transition-transform group-hover:scale-110" color="#181717" size={32} />
							</a>
							<a
								className="group bg-foreground hover:bg-foreground/90 text-primary inline-flex cursor-pointer items-center justify-center gap-4 rounded-md px-4 py-2 font-sans shadow-xs"
								href="https://www.linkedin.com/in/olivia-jeongok-lee/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
							</a>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
