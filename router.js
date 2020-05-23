import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "ToDo List Api Deno";

  console.log("router");
});

export default router;
