<template>
    <div class="grid grid-cols-5 gap-2">
        <div v-for="quizAnswer in props.route" :key="quizAnswer.id" class="w-[25px] h-[25px] rounded-sm shadow-sm"
            :class="getDynamicClassForEachQuestionResult(quizAnswer.questionResult)" />
    </div>
</template>

<script setup lang="ts">
import type { QuizResults } from "~/domain/types";
type ResultsViewAnswerHistoryProps = {
    route: QuizResults["route"];
};

type QuestionResult = QuizResults["route"][0]["questionResult"];


const getDynamicClassForEachQuestionResult = (questionResult: QuestionResult) => {
    return {
        "bg-green-500": questionResult === 'correct',
        "bg-red-500": questionResult === 'false',
        "bg-gray-500": questionResult === 'skipped',
    }
};
const props = defineProps<ResultsViewAnswerHistoryProps>();
</script>
