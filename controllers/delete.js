import { FILE_PATH } from "../config.js";

export default async ({ response, params, ...rest }) => {
  try {
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    const updatedTodos = todos.filter(({ id }) => {
      return id != params.id;
    });

    await Deno.writeFile(
      FILE_PATH,
      encoder.encode(JSON.stringify(updatedTodos))
    );

    response.status = 200;
    response.body = { status: "success", responseData: updatedTodos };
  } catch (error) {
    response.status = 500;
    response.body = { status: "Failed to delete", error };
  }
};
