import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { clerkClient } from "@clerk/nextjs/server";

const clerk = await clerkClient();

const app = new Hono().get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);

  //   Checking if request is authenticated
  if (!auth?.userId) {
    return c.json({ error: "Unauthorized!" }, 401);
  }
  const userId = auth.userId;

  //   Get Full User Data
  const user = await clerk.users.getUser(userId);
  const role = user.unsafeMetadata?.role as "agent" | "student" | undefined;

  if (role === undefined) return c.text("/agents/sign-up");

  const isAgent = role === "agent";
  const isStudent = role === "student";

  await clerk.users.updateUser(userId, {
    publicMetadata: {
      isAgent,
      isStudent,
    },
    unsafeMetadata: {},
  });

  return c.json({
    success: true,
  });
});

export default app;
