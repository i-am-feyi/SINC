import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useFinishSignup = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await client.api["finish-signup"].$get();

      if (!response.ok) {
        throw new Error("Failed to complete signup");
      }

      const { success } = await response.json();
      return success;
    },
  });

  return query;
};
