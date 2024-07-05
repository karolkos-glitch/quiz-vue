import { createQuizResultInstance } from "~/domain/createQuizResultInstance";
import type { Quiz } from "~/domain/types";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ quiz: Quiz }>(event);
  const result = createQuizResultInstance(body.quiz);
  return { result };
});
