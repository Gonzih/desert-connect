import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  getChangelogFileContent,
  getChangelogFileType,
  type ChangelogFileType,
} from "@/lib/changelogFiles";

type FilePreviewDialogProps = {
  path: string | null;
  label: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const FileBody = ({ path, type }: { path: string; type: ChangelogFileType }) => {
  const content = getChangelogFileContent(path);

  if (!content) {
    return (
      <p className="text-sm text-muted-foreground">
        This file could not be loaded. It may have moved since this entry was written.
      </p>
    );
  }

  if (type === "markdown") {
    return (
      <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-display prose-pre:bg-muted prose-pre:text-foreground">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    );
  }

  return (
    <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-relaxed text-foreground">
      <code>{content}</code>
    </pre>
  );
};

export const FilePreviewDialog = ({
  path,
  label,
  open,
  onOpenChange,
}: FilePreviewDialogProps) => {
  const fileType = path ? getChangelogFileType(path) : "code";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-3xl gap-0 overflow-hidden p-0">
        <DialogHeader className="border-b border-border px-6 py-4 text-left">
          <DialogTitle>{label}</DialogTitle>
          {path ? (
            <DialogDescription className="font-mono text-xs">{path}</DialogDescription>
          ) : null}
        </DialogHeader>

        <ScrollArea className="max-h-[calc(85vh-5.5rem)] px-6 py-4">
          {path ? <FileBody path={path} type={fileType} /> : null}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
