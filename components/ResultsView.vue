<template>
    <main class="flex flex-col justify-center items-center mx-2 gap-y-8 h-screen">
        <header class="text-center text-4xl sm:flex gap-x-8">
            <Typography as="h1" class="font-light">
                Your results:
            </Typography>
            <Typography class="font-bold">{{ props.quizResults.answerStatistic.correct }} points</Typography>
        </header>
        <section class="flex flex-col gap-y-4">
            <Typography as="h2" variant="secondary" class="underline text-2xl">
                Answers:
            </Typography>
            <div class="flex flex-col gap-y-4 justify-center items-start sm:flex-row sm:gap-x-4">
                <ResultsViewStats :quizCorrectAnswers="props.quizResults.answerStatistic.correct"
                    :quizFalseAnswers="props.quizResults.answerStatistic.false"
                    :quizSkippedAnswers="props.quizResults.answerStatistic.skipped" />
                <ResultsViewAnswersHistory :route="quizResults.route" />
            </div>
        </section>
        <Button @click="navigateToHome">Play again</Button>
    </main>
</template>

<script setup lang="ts">
import type { QuizResults } from '~/domain/types';

type ResultsViewProps = {
    quizResults: QuizResults;
};

const props = defineProps < ResultsViewProps > ();

const navigateToHome = async () => {
    await navigateTo('/');
};

</script>
