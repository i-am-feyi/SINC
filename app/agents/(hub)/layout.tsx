"use client";

import Loader from "@/components/loader";
import { SignedIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AgentHubLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    if (isSignedIn) {
      const isAgent = user.publicMetadata.isAgent as boolean;

      if (!isAgent) {
        return router.replace("/agents/signup-prompt");
      }
    }
  }, [user, router, isSignedIn]);

  return <div>{children}</div>;
}

export default AgentHubLayout;
