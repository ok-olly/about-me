import { Badge } from "@/components/ui/badge";
import {
	SiCss,
	SiFigma,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiJira,
	SiLess,
	SiReact,
	SiRedux,
	SiSass,
	SiStyledcomponents,
	SiSupabase,
	SiTailwindcss,
	SiTypescript
} from "@icons-pack/react-simple-icons";

export default function Skill() {
	return (
		<section className="py-20 sm:py-40">
			<div className="mb-16 text-center">
				<h2 className="mb-4 text-3xl font-bold sm:text-4xl">Skills</h2>
				<p className="text-foreground/60 mx-auto max-w-2xl font-sans text-lg">Learning, Building, Evolving</p>
			</div>
			<div className="flex flex-wrap justify-center gap-4">
				<Badge icon={<SiHtml5 color="default" size={32} />} name="HTML5" />
				<Badge icon={<SiCss color="default" size={32} />} name="CSS" />
				<Badge icon={<SiJavascript color="default" size={32} />} name="JavaScript" />
				<Badge icon={<SiTypescript color="default" size={32} />} name="TypeScript" />
				<Badge icon={<SiReact color="default" size={32} />} name="React" />
				<Badge icon={<SiRedux color="default" size={32} />} name="Redux" />
				<Badge icon={<SiLess color="default" size={32} />} name="Less" />
				<Badge icon={<SiTailwindcss color="default" size={32} />} name="Tailwind CSS" />
				<Badge icon={<SiStyledcomponents color="default" size={32} />} name="styled-components" />
				<Badge icon={<SiSass color="default" size={32} />} name="SCSS" />
				<Badge icon={<SiSupabase color="default" size={32} />} name="Supabase" />
				<Badge icon={<SiGit color="default" size={32} />} name="Git" />
				<Badge icon={<SiGithub color="default" size={32} />} name="GitHub" />
				<Badge icon={<SiFigma color="default" size={32} />} name="Figma" />
				<Badge icon={<SiJira color="default" size={32} />} name="Jira" />
			</div>
		</section>
	);
}
