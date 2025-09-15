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
		<section className="py-20">
			<h2 className="mb-16 text-center text-3xl font-bold sm:text-4xl">Skills</h2>
			<div className="flex flex-wrap justify-center gap-4">
				<Badge icon={<SiHtml5 color="default" size={32} />}>HTML5</Badge>
				<Badge icon={<SiCss color="default" size={32} />}>CSS</Badge>
				<Badge icon={<SiJavascript color="default" size={32} />}>JavaScript</Badge>
				<Badge icon={<SiTypescript color="default" size={32} />}>TypeScript</Badge>
				<Badge icon={<SiReact color="default" size={32} />}>React</Badge>
				<Badge icon={<SiRedux color="default" size={32} />}>Redux</Badge>
				<Badge icon={<SiLess color="default" size={32} />}>Less</Badge>
				<Badge icon={<SiTailwindcss color="default" size={32} />}>Tailwind CSS</Badge>
				<Badge icon={<SiStyledcomponents color="default" size={32} />}>styled-components</Badge>
				<Badge icon={<SiSass color="default" size={32} />}>SCSS</Badge>
				<Badge icon={<SiSupabase color="default" size={32} />}>Supabase</Badge>
				<Badge icon={<SiGit color="default" size={32} />}>Git</Badge>
				<Badge icon={<SiGithub color="default" size={32} />}>GitHub</Badge>
				<Badge icon={<SiFigma color="default" size={32} />}>Figma</Badge>
				<Badge icon={<SiJira color="default" size={32} />}>Jira</Badge>
			</div>
		</section>
	);
}
