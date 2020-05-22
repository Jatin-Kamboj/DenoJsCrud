import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (req, res) => {
  res.body = "ToDo List Api Deno";
  res.console.log("router");
});

export default router;
