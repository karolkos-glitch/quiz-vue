import type { Mode, Quiz } from "./types";

type RetrieveDataForQuizFunctionType = () => Promise<{
  questions: {
    id: string;
    question: string;
    correctAnswer: string;
    answers: {
      key: string;
      label: string;
    }[];
  }[];
}>;

export const createQuizInstance = async (
  mode: Mode,
  retrieveDataForQuiz = () => import("./data.json")
): Promise<Quiz> => {
  return {
    mode: mode,
    questions: await createQuestionsForInstance(
      mode.questionCount,
      retrieveDataForQuiz
    ),
  };
};

const createQuestionsForInstance = async (
  questionCount: number,
  retrieveDataForQuiz: RetrieveDataForQuizFunctionType
): Promise<Quiz["questions"]> => {
  const { questions: parsedQuestions } = await retrieveDataForQuiz();
  let questions: Quiz["questions"] = [];
  for (let i = 0; i <= questionCount; i++) {
    const questionCandidate = parsedQuestions.at(i);
    if (!questionCandidate) break;
    questions.push({
      content: questionCandidate,
      result: null,
    });
  }

  return questions;
};
