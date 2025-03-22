"use client";
import Loader from "@/components/loader";
import { ClerkLoaded, ClerkLoading, SignUp, useAuth } from "@clerk/nextjs";
import Image from "next/image";

const AgentsSignUpPage = () => {
  const auth = useAuth();

  const redirectUrl = auth.userId ? "/agents/dashboard" : "/agents/sign-up/finish";

  return (
    <>
      <ClerkLoaded>
        <div className="h-screen grid grid-cols-1 xl:grid-cols-[1fr_680px] gap-2">
          <div className="flex items-center justify-center w-full">
            <SignUp
              routing="hash"
              unsafeMetadata={{
                role: "agent",
              }}
              forceRedirectUrl={redirectUrl}
              appearance={{
                elements: {
                  cardBox: "!w-full !max-w-md",
                },
                layout: {
                  unsafe_disableDevelopmentModeWarnings: true,
                },
              }}
              signInUrl="/agents/sign-in"
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
