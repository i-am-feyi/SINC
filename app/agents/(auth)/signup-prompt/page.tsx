"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSignupAsAgent } from "@/features/use-signup-as-agent";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

const AgentSignUpPrompt = () => {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const { mutate, isPending } = useSignupAsAgent();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const run = () => {
      if (!isLoaded) return null;

      if (isLoaded && !user) {
        return router.replace("/agents/sign-in");
      }

      if (user.publicMetadata.isAgent) return router.replace("/agents/dashboard");

      setIsMounted(true);
    };

    run();
  }, [user, isLoaded, router]);

  const handleRegisterAsAgent = async () => {
    mutate(undefined, {
      onSuccess: async () => {
        await user?.reload();
        toast.success("You have successfully signed up as an 'Agent'.");
        router.replace("/agents/dashboard");
      },
    });
  };

  if (isMounted)
    return (
      <div className="h-screen grid grid-cols-1 xl:grid-cols-[1fr_680px] gap-2">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="grid gap-y-2">
            <p className="text-center text-muted-foreground">
              Signed in as:{" "}
              <span className="font-semibold">
                {user?.emailAddresses[0].emailAddress}
              </span>
            </p>
            <h1 className="text-xl">
              You're currently signed in as a{" "}
              <span className="font-medium text-green-900 underline">Student</span>
            </h1>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <Button size="lg" disabled={isPending} onClick={handleRegisterAsAgent}>
              {isPending && <Loader2 className="text-white animate-spin" />}
              Register as Agent
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/students">Back to Student Portal</Link>
            </Button>
          </div>
        </div>
        <div className="max-xl:hidden p-4 h-full">
          <div className="relative rounded-xl h-full bg-[url('/agents-handshake.jpg')] bg-cover bg-center">
            <div className=" bg-white/30 backdrop-blur-md absolute rounded-xl bottom-40 -left-20 shadow-md">
              <div className="h-16 flex items-center justify-center px-3 rounded-xl border border-white text-medium">
                Earn Commissions with Student Referrals 💰💸
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return <Loader />;
};

export default AgentSignUpPrompt;
