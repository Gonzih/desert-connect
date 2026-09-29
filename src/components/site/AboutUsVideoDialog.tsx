import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ABOUT_US_HASH, ABOUT_US_VIDEO_URL } from "@/lib/siteNavigation";
import { smoothScrollTo } from "@/lib/navigation";

type AboutUsVideoDialogProps = {
  trigger?: ReactNode;
};

export const AboutUsVideoDialog = ({ trigger }: AboutUsVideoDialogProps) => {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const aboutHash = `#${ABOUT_US_HASH}`;

  useEffect(() => {
    if (pathname === "/" && hash === aboutHash) {
      smoothScrollTo("#membership");
      setOpen(true);
    }
  }, [pathname, hash, aboutHash]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next && pathname === "/" && hash === aboutHash) {
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>About ISOC Nevada</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <video
            controls
            preload="metadata"
            className="w-full rounded-lg bg-black"
            src={ABOUT_US_VIDEO_URL}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};
