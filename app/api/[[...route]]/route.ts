import { Hono } from "hono";
import { handle } from "hono/vercel";

import getIP from "./get-ip";
import finishSignup from "./finish-signup";
import agentSignup from "./agents/signup";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");

const routes = app
  .route("/get-ip", getIP)
  .route("/finish-signup", finishSignup)
  .route("/agents/signup", agentSignup);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
