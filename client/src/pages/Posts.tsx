import SiteLayout from "@/components/SiteLayout";
import { portfolioData, type PortfolioPost } from "@/data/portfolioData";
import { Calendar } from "lucide-react";

type GroupedPosts = Record<string, Record<string, PortfolioPost[]>>;

const readingTime = (excerpt: string) => Math.max(1, Math.ceil(excerpt.split(/\s+/).length / 200));

export default function Posts() {
  const groupedPosts = portfolioData.blogPosts.reduce<GroupedPosts>((acc, post) => {
    const date = new Date(post.date);
    const year = String(date.getFullYear());
    const month = date.toLocaleDateString("en-US", { month: "long" });

    acc[year] ??= {};
    acc[year][month] ??= [];
    acc[year][month].push(post);
    return acc;
  }, {});

  return (
    <SiteLayout>
      <section>
        <h1>All Posts</h1>
        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>Browse all blog posts by year and month.</p>

        <div className="posts-archive">
          {Object.keys(groupedPosts)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => (
              <div key={year} className="year-section">
                <div className="year-header">
                  {year} ({Object.values(groupedPosts[year]).flat().length})
                </div>

                {Object.keys(groupedPosts[year])
                  .sort((a, b) => new Date(`${b} 1, ${year}`).getTime() - new Date(`${a} 1, ${year}`).getTime())
                  .map((month) => (
                    <div key={`${year}-${month}`} className="month-section">
                      <div className="month-header">
                        {month} ({groupedPosts[year][month].length})
                      </div>

                      {groupedPosts[year][month].map((post) => (
                        <article key={post.id} id={post.slug} className="archive-post">
                          <h3>
                            <a href={`/posts#${post.slug}`}>{post.title}</a>
                          </h3>
                          <div className="post-meta">
                            <Calendar size={14} />{" "}
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}{" "}
                            &bull; {readingTime(post.excerpt)} min read
                          </div>
                          <p className="post-excerpt">{post.excerpt}</p>
                        </article>
                      ))}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </section>

      <hr />
    </SiteLayout>
  );
}
