import { client } from "@/lib/hono";
import { useMutation } from "@tanstack/react-query";

export const useSignupAsAgent = () => {
  const query = useMutation({
    mutationFn: async () => {
      const response = await client.api["agents"]["signup"].$get();

      if (!response.ok) {
        throw new Error("Failed to complete signup");
      }

      const { success } = await response.json();
      return success;
    },
  });

  return query;
};
