<template>
    <ul>
        <li class="flex justify-between gap-x-2 text-xl">
            <Typography variant="green">Poprawne</Typography>
            <Typography variant="secondary">{{ props.quizCorrectAnswers }}</Typography>
        </li>
        <li class="flex justify-between gap-x-2 text-xl">
            <Typography class="text-red-500">Niepoprawne</Typography>
            <Typography variant="secondary">{{ props.quizFalseAnswers }}</Typography>
        </li>
        <li class="flex justify-between gap-x-2 text-xl">
            <Typography variant="secondary">Pominięte: </Typography>
            <Typography variant="secondary">{{ props.quizSkippedAnswers }}</Typography>
        </li>
    </ul>
</template>

<script setup lang="ts">
type ResultsViewStatsProps = {
    quizCorrectAnswers: number;
    quizFalseAnswers: number;
    quizSkippedAnswers: number;
};
const props = defineProps<ResultsViewStatsProps>();
</script>