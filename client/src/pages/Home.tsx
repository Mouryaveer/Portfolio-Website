import SiteLayout from "@/components/SiteLayout";
import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

const readingTime = (excerpt: string) => Math.max(1, Math.ceil(excerpt.split(/\s+/).length / 200));

export default function Home() {
  return (
    <SiteLayout>
      <section className="hero-section">
        <div className="hero-avatar">
          <a href="/about">
            <img src={portfolioData.photo} alt={portfolioData.name} />
          </a>
        </div>
        <div className="hero-content">
          <h1>Hi, I'm @{portfolioData.name.split(" ")[0].toLowerCase()}.</h1>
          <p className="tagline">{portfolioData.tagline}</p>
          <p className="subtitle">{portfolioData.subTagline}</p>
          <p>{portfolioData.about}</p>
          <div className="skill-strip" aria-label="Featured skills">
            {portfolioData.skills.slice(0, 6).map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="social-icons">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={18} />
              GitHub
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.email}`} title="Email">
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
      </section>

      <hr />

      <section id="posts">
        <ul className="posts-list">
          {portfolioData.blogPosts.map((post) => (
            <li key={post.id} className="post-item">
              <h3>
                <a href={`/posts#${post.slug}`}>{post.title}</a>
              </h3>
              <div className="post-meta">
                Published:{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                &bull; {readingTime(post.excerpt)} min read
              </div>
              <p className="post-excerpt">{post.excerpt}</p>
            </li>
          ))}
        </ul>
        <a href="/posts" className="all-posts-link">
          All Posts
        </a>
      </section>

      <hr />
    </SiteLayout>
  );
}
