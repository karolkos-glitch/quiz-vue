import type { QuestionAnswer, Quiz } from "./types";

export const useInGameQuizInstance = (
  initialGameQuiz: Quiz,
  endGame: (quiz: Quiz) => void
) => {
  const quiz = reactive(initialGameQuiz);
  const questionIndex = ref(0);
  const currentQuestion = computed(() =>
    quiz.questions.at(questionIndex.value)
  );

  const nextQuestion = () => {
    if (questionIndex.value < quiz.questions.length - 1) {
      questionIndex.value++;
      return;
    }
    endGame(quiz);
  };

  const onAnswer = (answer: QuestionAnswer) => {
    nextQuestion();
    quiz.questions[questionIndex.value].result =
      answer.key === quiz.questions[questionIndex.value].content.correctAnswer
        ? "correct"
        : "false";
  };

  const onSkip = () => {
    nextQuestion();
    quiz.questions[questionIndex.value].result = "skipped";
    quiz.mode = quiz.mode;
  };

  return {
    questionIndex,
    currentQuestion,
    actions: {
      onAnswer,
      onSkip,
    },
  };
};
