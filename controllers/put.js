import { FILE_PATH } from "../config.js";

export default async ({ response, request, params, ...rest }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  try {
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));
    const {
      value: { title, completed },
    } = await request.body();

    console.log("params", params);
    console.log("params", title, completed);
    /**IF we have the smae value and the property name in the Json object
     * then we can directly write down the new value in the Json Object.
     *
     */
    const updatedTodo = todos.map((todo) => {
      if (todo.id === Number(params?.id)) {
        console.log("todo", todo);
        return {
          ...todo,
          title,
          completed,
        };
      }
      return todo;
    });
    await Deno.writeFile(
      FILE_PATH,
      encoder.encode(JSON.stringify(updatedTodo))
    );
    response.status = 204;
    response.body = { status: "success", responseData: updatedTodo };
  } catch (error) {
    response.status = 500;
    response.body = { status: "Failed to Update", error };
  }
};
