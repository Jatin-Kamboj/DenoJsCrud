import { Router } from "https://deno.land/x/oak/mod.ts";
import getTodos from "./controllers/get.js";
import postTodos from "./controllers/post.js";
import deleteTodos from "./controllers/delete.js";
import putTodos from "./controllers/put.js";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "ToDo List Api Deno";

  console.log("router");
});

router
  .get("/todos", getTodos)
  .post("/todos", postTodos)
  .delete("/todos/:id", deleteTodos)
  .put("/todos/:id", putTodos);

export default router;
