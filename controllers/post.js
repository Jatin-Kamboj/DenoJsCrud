import { FILE_PATH } from "../config.js";

export default async ({ request, response }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    const { value } = await request.body();
    console.log(value);

    const newTodo = {
      id: todos.length + 1,
      title: value.title,
      Completed: false,
    };
    todos.push(newTodo);
    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)));

    response.status = 200;
    response.body = {
      status: "success",
      newTodo: newTodo,
      responseMessage: "Todo added Successfully",
    };
  } catch (error) {
    response.status = 500;
    response.body = {
      status: "Failed to Create a new post",
      error,
    };
  }
};
