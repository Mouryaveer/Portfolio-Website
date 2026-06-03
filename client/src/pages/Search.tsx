import SiteLayout from "@/components/SiteLayout";
import { portfolioData, type PortfolioPost } from "@/data/portfolioData";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const readingTime = (excerpt: string) => Math.max(1, Math.ceil(excerpt.split(/\s+/).length / 200));

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults: PortfolioPost[] = normalizedQuery
    ? portfolioData.blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(normalizedQuery) ||
          post.excerpt.toLowerCase().includes(normalizedQuery),
      )
    : [];

  return (
    <SiteLayout>
      <section className="search-section">
        <h1>Search</h1>
        <p className="subtitle">Search articles by title or excerpt.</p>

        <div className="search-input-wrapper">
          <SearchIcon className="search-input-icon" size={18} />
          <input
            type="text"
            placeholder="Search posts, e.g. React"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            autoFocus
          />
        </div>

        {searchResults.length > 0 && (
          <div style={{ marginTop: "2rem", textAlign: "left" }}>
            <h2 style={{ marginBottom: "1rem" }}>Results ({searchResults.length})</h2>
            <ul className="posts-list">
              {searchResults.map((post) => (
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
          </div>
        )}

        {normalizedQuery && searchResults.length === 0 && (
          <div style={{ marginTop: "2rem", opacity: 0.7 }}>
            <p>No posts found matching "{searchQuery}".</p>
          </div>
        )}
      </section>

      <hr />
    </SiteLayout>
  );
}
