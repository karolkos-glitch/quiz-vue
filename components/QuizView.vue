<template>
    <main class="flex flex-col justify-center items-center my-4 sm:h-screen">
        <header class="flex justify-between w-64">
            <Typography as="h1" variant="secondary">
                {{ headerValue }}
            </Typography>
            <Typography variant="secondary">{{ timeRemaining }} sek.</Typography>
        </header>
        <div class="flex flex-col gap-y-4 items-center justify-center">
            <NuxtImg :preload="true" src="/michael-scott-handshake.webp" alt="Logo the office" width="300" />
            <Choices v-if="currentQuestion" :label="currentQuestion.content.question" v-model="selectedAnswer"
                :choices="currentQuestion.content.answers" variant="grid" />
            <div class="flex flex-col gap-x-4 gap-y-4">
                <Button @click="handleAnswer" :variant="selectedAnswer ? 'solid' : 'questionable'">
                    odpowiedź
                </Button>
                <Button @click="handleSkip" variant="outlined">
                    pomiń
                </Button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { createQuizResultInstance } from '~/domain/createQuizResultInstance';
import type { QuestionAnswer, Quiz } from '~/domain/types';
import { useInGameQuizInstance } from '~/domain/useInGameQuizInstance';
import { useTimeRemaining } from '~/domain/useTimeRemaining';

type QuizProps = {
    quiz: Quiz;
};

const props = defineProps<QuizProps>();

const endGameAndRedirectToResults = async (quizInstance: Quiz) => {
    const quizResults = createQuizResultInstance(quizInstance);
    const searchParams = new URLSearchParams({
        quizResults: JSON.stringify(quizResults),
    });
    const quizResultsSearchParamsString = searchParams.toString();
    await navigateTo(`/results/?${quizResultsSearchParamsString}`);
};
const { currentQuestion, questionIndex, actions: { onAnswer, onSkip } } = useInGameQuizInstance(props.quiz, endGameAndRedirectToResults);
const handleNextQuestion = () => {
    selectedAnswer.value ? onAnswer(selectedAnswer.value) : onSkip();
    selectedAnswer.value = undefined;
};
const { timeRemaining, resetTimeRemaining } = useTimeRemaining(30, handleNextQuestion);
const handleAnswer = () => {
    if (selectedAnswer.value) {
        onAnswer(selectedAnswer.value);
        selectedAnswer.value = undefined;
        resetTimeRemaining();
    }
};
const handleSkip = () => {
    onSkip();
    resetTimeRemaining();
};
const selectedAnswer = ref<QuestionAnswer | undefined>();
const headerValue = computed(() => `Pytanie ${questionIndex.value + 1}`);


</script>