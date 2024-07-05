import { createQuizInstance } from "~/domain/createQuizInstance";
import type { Mode } from "~/domain/types";

export default defineEventHandler(async (event) => {
  const retrieveData = async () => {
    return await import("~/domain/data.json");
  };
  const body = await readBody<{ mode: Mode }>(event);
  const quiz = await createQuizInstance(body.mode, retrieveData);

  return { quiz };
});
