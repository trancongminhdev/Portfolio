import { IProject } from "@/types/interface";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Props {
    project: IProject;
    isInView: boolean;
}

const CardProject: React.FC<Props> = ({ project, isInView }) => (
    <div
        key={project.id}
        className={`group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 ${isInView ? 'animate-scale-in opacity-100' : 'opacity-0'
            }`}
        style={{ animationDelay: `${project.id * 0.1}s`, animationFillMode: 'forwards' }}
    >
        {/* Project Image Placeholder */}
        <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative`}>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50 group-hover:from-primary/10 transition-colors duration-300"></div>
            <div className="text-center z-10">
                <p className="text-sm text-foreground/60 font-semibold">Project Preview</p>
            </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, j) => (
                    <span
                        key={j}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
                <a
                    href={project.linkDemo}
                    className="flex items-center gap-2 flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                >
                    <ExternalLink size={16} />
                    Visit
                </a>
                <a
                    href={project.linkGithub}
                    className="flex items-center gap-2 flex-1 px-3 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 text-sm font-medium"
                >
                    <FaGithub size={16} />
                    Code
                </a>
            </div>
        </div>
    </div>
)

export default CardProject;