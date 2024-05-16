<template>
    <div v-if="pending" class="bouncing" />
    <div v-else-if="error" class="error">{{ error.message }}</div>
    <ResultsView v-if="quizResults" :quizResults="quizResults" />
</template>

<script setup lang="ts">
import type { QuizResults } from '~/domain/types';

const route = useRoute();

const { data: quizResults, error, pending } = useAsyncData<QuizResults>('results', () => {
    const quizResultsSearchParamValue = route.query.quizResults
    const quizResultsValue = quizResultsSearchParamValue ? JSON.parse(quizResultsSearchParamValue as string) : null;
    if (quizResultsValue) return quizResultsValue;
    throw createError({ statusCode: 404, statusMessage: 'No quiz results found' });
});

</script>