"use client";

import { SignUp, useAuth } from "@clerk/nextjs";

const StudentSignUpPage = () => {
  const auth = useAuth();

  const redirectUrl = auth.userId ? "/students/dashboard" : "/students/sign-up/finish";
  return (
    <div>
      <SignUp
        routing="hash"
        unsafeMetadata={{
          role: "student",
        }}
        forceRedirectUrl={redirectUrl}
      />
    </div>
  );
};

export default StudentSignUpPage;
