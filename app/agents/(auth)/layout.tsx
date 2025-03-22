"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function AgentAuthLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default AgentAuthLayout;
