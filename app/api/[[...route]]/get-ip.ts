// books.ts
import { Hono } from "hono";

const app = new Hono().get("/", (c) => {
  const forwardedFor = c.req.header("x-forwarded-for");
  const realIp = c.req.header("x-real-ip");

  if (!forwardedFor && !realIp) return c.json({ error: "IP Address Not Found!" }, 500);

  if (forwardedFor && realIp) {
    const forwardedForIp = forwardedFor.split(",")[0].trim();
    const realIpIp = realIp.trim();

    return c.json({ forwardedForIp, realIpIp });
  }

  if (forwardedFor) return c.json({ forwardedForIp: forwardedFor.split(",")[0].trim() });
  if (realIp) return c.json({ realIp: realIp.trim() });

  return c.json("IP Address Not Found!", 500);
});

export default app;
