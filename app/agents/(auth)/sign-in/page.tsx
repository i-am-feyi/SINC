"use client";

import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Loader from "@/components/loader";

const AgentsSignUpPage = () => {
  return (
    <>
      <ClerkLoaded>
        <div className="h-screen grid grid-cols-1 xl:grid-cols-[1fr_680px] gap-2">
          <div className="flex items-center justify-center w-full">
            <SignIn
              routing="hash"
              forceRedirectUrl="/agents/dashboard"
              appearance={{
                elements: {
                  cardBox: "!w-full !max-w-sm",
                  rootBox: "!w-full items-center justify-center flex",
                },
                layout: {
                  unsafe_disableDevelopmentModeWarnings: true,
                },
              }}
              signUpUrl="/agents/sign-up"
            />
          </div>
          <div className="max-xl:hidden p-4 h-full">
            <div className="relative rounded-xl h-full">
              <Image
                src="/agents-handshake.jpg"
                alt="Agents having a handshake"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </ClerkLoaded>
      <ClerkLoading>
        <Loader />
      </ClerkLoading>
    </>
  );
};

export default AgentsSignUpPage;
