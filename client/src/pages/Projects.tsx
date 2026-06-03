import SiteLayout from "@/components/SiteLayout";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <SiteLayout>
      <section id="projects">
        <h2>Projects</h2>
        <p className="section-subtitle">Things I've built</p>
        <ul className="projects-list">
          {portfolioData.projects.map((project) => (
            <li key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <Github size={17} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live demo">
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              <div className="skill-strip">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
