<template>
    <div v-if="pending" class="bouncing" />
    <div v-else-if="error" class="error">{{ error.message }}</div>
    <QuizView v-if="quiz" :quiz="quiz" />
</template>

<script setup lang="ts">
import { createQuizInstance } from '~/domain/createQuizInstance';
import type { Mode, Quiz } from '~/domain/types';

const route = useRoute();
const { data: quiz, pending, error } = useAsyncData<Quiz | null>('quiz', async () => {
    const modeSearchParamValue = route.query.mode
    const mode: Mode | null = modeSearchParamValue ? JSON.parse(modeSearchParamValue as string) : null
    if (mode == null) {
        throw new Error('No mode found');
    }
    return await createQuizInstance(mode);
});


</script>