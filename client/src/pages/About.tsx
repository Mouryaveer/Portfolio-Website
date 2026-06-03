import SiteLayout from "@/components/SiteLayout";
import { portfolioData } from "@/data/portfolioData";
import { Award, BrainCircuit, Cloud, Network } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("Thanks for subscribing.");
    setName("");
    setEmail("");
  };

  return (
    <SiteLayout>
      <section className="about-section">
        <div className="about-image">
          <img src={portfolioData.aboutPhoto} alt={portfolioData.name} />
        </div>
        <div className="about-content">
          <h2>About</h2>
          <p>{portfolioData.about}</p>
          {portfolioData.aboutDetails.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">
              Check out my projects on GitHub
            </a>
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            <a href={`mailto:${portfolioData.email}`} className="resume-btn">
              Contact Me
            </a>
          </p>
        </div>
      </section>

      <hr />

      <section className="focus-section">
        <h2>Focus Areas</h2>
        <div className="focus-grid">
          <article>
            <BrainCircuit size={24} />
            <h3>Agentic AI</h3>
            <p>Designing autonomous AI systems that reason, plan, use tools, and coordinate across tasks.</p>
          </article>
          <article>
            <Network size={24} />
            <h3>Multi-Agent Architecture</h3>
            <p>Building agent workflows with LangChain, LangGraph, LlamaIndex, and automation platforms like n8n.</p>
          </article>
          <article>
            <Cloud size={24} />
            <h3>Cloud Computing</h3>
            <p>Applying cloud fundamentals across AWS, Azure, Oracle Cloud, and Google Cloud for AI deployment.</p>
          </article>
        </div>
      </section>

      <hr />

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {portfolioData.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <hr />

      <section className="certifications-section">
        <h2>Licenses & Certifications</h2>
        <div className="certifications-list">
          {portfolioData.certifications.map((certification) => (
            <article key={`${certification.issuer}-${certification.title}`} className="certification-card">
              <div className="certification-icon">
                <Award size={20} />
              </div>
              <div>
                <h3>{certification.title}</h3>
                <p className="certification-issuer">{certification.issuer}</p>
                <p className="certification-meta">Issued {certification.issued}</p>
                {certification.credentialId && (
                  <p className="certification-meta">Credential ID {certification.credentialId}</p>
                )}
                {certification.skills && (
                  <div className="certification-skills">
                    {certification.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr />

      <section className="newsletter-section">
        <h2>Stay Connected</h2>
        <p>AI notes, cloud learning, and project updates straight to your inbox.</p>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {status && <p role="status">{status}</p>}
        <p>If you would like to connect or have questions about my work, reach out through any of the links below.</p>
      </section>

      <hr />
    </SiteLayout>
  );
}
