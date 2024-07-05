<template>
    <div v-if="!!error" class="error">{{ error.message }}</div>
    <QuizView v-if="data?.quiz" :quiz="data.quiz" />
</template>

<script setup lang="ts">
import type { Mode } from '~/domain/types';

const route = useRoute();
const modeSearchParamValue = route.query.mode
const mode: Mode | null = modeSearchParamValue ? JSON.parse(modeSearchParamValue as string) : null
const { data, error } = useFetch('/api/quizzes', {
    method: 'POST', body: JSON.stringify({
        mode
    })
})


</script>