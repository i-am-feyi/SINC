"use client";

import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFinishSignup } from "@/features/use-finish-signup";

const CompleteAgentSignUp = () => {
  const router = useRouter();
  const { data: redirectPath, isLoading, isError, error } = useFinishSignup();

  useEffect(() => {
    if (redirectPath) {
      router.replace("/agents/dashboard");
    }
  }, [redirectPath, router]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader2 className="size-10 animate-spin" />
      </div>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-center mt-20 text-red-500">
          Failed to complete signup: {error?.message}
        </div>
      </div>
    );
  }

  return null;
};

export default CompleteAgentSignUp;
