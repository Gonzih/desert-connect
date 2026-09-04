import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { SiteLink } from "@/components/SiteLink";
import { ArrowLeft, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieConsent } from "@/components/site/CookieConsent";
import { projects, projectSlugs } from "@/data/projects";
import { projectPath } from "@/lib/siteNavigation";
import { smoothScrollTo } from "@/lib/navigation";

const Projects = () => {
  const { slug } = useParams<{ slug?: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect legacy /projects#slug bookmarks to /projects/slug
  useEffect(() => {
    if (!location.hash) return;
    const legacySlug = location.hash.slice(1);
    if (projectSlugs.includes(legacySlug)) {
      navigate(projectPath(legacySlug), { replace: true });
    }
  }, [location.hash, navigate]);

  useEffect(() => {
    if (!slug) {
      window.scrollTo(0, 0);
      return;
    }

    let attempts = 0;
    const tryScroll = () => {
      if (document.getElementById(slug)) {
        smoothScrollTo(`#${slug}`);
        return;
      }
      if (attempts++ < 12) {
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container">
            <Button variant="ghost" className="mb-8" asChild>
              <SiteLink
                target={{ type: "section", section: "projects" }}
                className="inline-flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home projects
              </SiteLink>
            </Button>

            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Projects
              </span>
              <h1 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
                Chapter projects and workgroups
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                These projects are where ISOC Nevada turns Internet Society principles into
                practical work for access, security, education, policy, and community connectivity
                across Nevada.
              </p>
            </div>

            <nav className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Projects">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to={projectPath(project.slug)}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card transition-smooth hover:-translate-y-0.5 hover:shadow-elegant"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-gradient-primary text-primary-foreground">
                    <project.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                    {project.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container space-y-8">
            {projects.map((project) => (
              <article
                id={project.slug}
                key={project.slug}
                className="scroll-mt-24 rounded-lg border border-border bg-card p-6 shadow-card md:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-gradient-primary text-primary-foreground shadow-elegant">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          {project.name}
                        </h2>
                        <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${project.email}`}
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {project.email}
                  </a>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">Purpose</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.purpose}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">Function</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.function}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Current Focus
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {project.priorities.map((priority) => (
                        <li key={priority} className="border-l-2 border-primary/30 pl-3">
                          {priority}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-sm">
                  <span className="text-muted-foreground">{project.lead}</span>
                  <Link
                    to="/projects"
                    className="font-semibold text-primary hover:underline"
                  >
                    Return to project list
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Projects;
