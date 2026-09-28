import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Legacy /changes page is intentionally disabled.
 * The route is no longer registered in App.tsx, and this page remains as a
 * harmless stub if it is referenced in a future branch or PR.
 */
const ChangesPage = () => {
  const [preview] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center p-8 text-center text-muted-foreground">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Changes</h1>
        <p className="mt-3 max-w-md">
          The site changes log has been disabled. This page is intentionally left inert.
        </p>
        {preview ? <Link to="/">Back to home</Link> : null}
      </div>
    </div>
  );
};

export default ChangesPage;
