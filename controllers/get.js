import { FILE_PATH } from "../config.js";

export default async ({ response, ...rest }) => {
  const decoder = new TextDecoder();
  //   console.log("rest", rest);

  try {
    const data = await Deno.readFile(FILE_PATH);
    const todos = JSON.parse(decoder.decode(data));

    response.status = 200;
    response.body = { status: "success", responseData: todos };
  } catch (error) {
    response.status = 500;
    response.body = { status: "failed to fetch todo's", error };
  }
};
