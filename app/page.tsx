import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignedIn>
        <div>
          <Button asChild>
            <SignOutButton />
          </Button>
        </div>
      </SignedIn>
      <SignedOut>
        <div>
          <Button asChild>
            <SignInButton />
          </Button>
        </div>
      </SignedOut>
    </div>
  );
}
