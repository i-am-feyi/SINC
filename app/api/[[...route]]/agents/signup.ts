import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { clerkClient } from "@clerk/nextjs/server";

const app = new Hono().get("/", clerkMiddleware(), async (c) => {
  const { users } = await clerkClient();
  const auth = getAuth(c);

  if (!auth?.userId) return c.json({ error: "Unauthorized!" }, 401);

  const user = await users.getUser(auth.userId);
  const currentPublicMetadata = user.publicMetadata || {};

  await users.updateUser(auth.userId, {
    publicMetadata: { ...currentPublicMetadata, isAgent: true },
  });

  return c.json({ success: true });
});

export default app;
