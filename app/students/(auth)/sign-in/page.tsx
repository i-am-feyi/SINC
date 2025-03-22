import { SignIn } from "@clerk/nextjs";

const AgentsSignUpPage = () => {
  return (
    <div>
      <SignIn routing="hash" forceRedirectUrl="/students/dashboard" />
    </div>
  );
};

export default AgentsSignUpPage;
