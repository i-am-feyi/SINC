import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <Loader2 className="size-10 animate-spin" />
      <p>Please wait...</p>
    </div>
  );
};

export default Loader;
