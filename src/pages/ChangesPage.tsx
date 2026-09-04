import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, GitPullRequest } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FilePreviewDialog } from "@/components/site/FilePreviewDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { changelogEntries } from "@/data/changelog";

type PreviewState = {
  path: string;
  label: string;
};

const formatDate = (isoDate: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate + "T12:00:00"));

const ChangesPage = () => {
  const [preview, setPreview] = useState<PreviewState | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="bg-surface-slate py-16 text-surface-slate-foreground md:py-20">
          <div className="container">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Internal
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Site Changes
            </h1>
            <p className="mt-4 max-w-2xl text-surface-slate-foreground/80">
              A running log of updates made to the ISOC Nevada website. Written for chapter
              volunteers — not a technical changelog. This page is not linked from the public
              navigation; bookmark <span className="font-mono text-white">/changes</span> to
              return here.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container max-w-4xl space-y-6">
            {changelogEntries.map((entry) => (
              <article
                key={entry.id}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="gap-1 font-mono text-xs">
                        <GitPullRequest className="h-3 w-3" />
                        PR #{entry.prNumber}
                      </Badge>
                      <Badge variant={entry.status === "merged" ? "default" : "outline"}>
                        {entry.status === "merged" ? "Merged" : "In progress"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(entry.date)}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {entry.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground">{entry.summary}</p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground">
                  {entry.changes.map((change) => (
                    <li key={change}>{change}</li>
                  ))}
                </ul>

                {entry.linkedFiles && entry.linkedFiles.length > 0 ? (
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Related files
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.linkedFiles.map((file) => (
                        <Button
                          key={file.path}
                          type="button"
                          variant="outline"
                          size="sm"
                          className="gap-2"
                          onClick={() => setPreview({ path: file.path, label: file.label })}
                        >
                          <FileText className="h-4 w-4" />
                          {file.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <FilePreviewDialog
        path={preview?.path ?? null}
        label={preview?.label ?? ""}
        open={preview !== null}
        onOpenChange={(open) => {
          if (!open) setPreview(null);
        }}
      />

      <div className="sr-only">
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default ChangesPage;
