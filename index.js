import { Application } from "https://deno.land/x/oak/mod.ts";
import { port } from "./config.js";
import router from "./router.js";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running in ${port}`);

await app.listen({ port: port });
