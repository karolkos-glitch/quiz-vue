<template>
    <main className="flex flex-col justify-center items-center my-4 gap-y-5 h-screen">
        <StartViewHeader />
        <Choices label="Choose game mode" :choices="modeChoices" v-model:selected="selectedMode" />
        <div className="flex flex-col justify-center items-center">
            <Button type="button" :disabled="!selectedMode" :variant="startButttonVariant" @click="handleStart"
                :tooltip="selectedMode ? null : 'Select mode!'">
                Start
            </Button>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { Mode } from '~/domain/types';

const modeChoices = [
    { key: "10-questions", label: "10 questions", questionCount: 10 },
    { key: "15-questions", label: "15 questions", questionCount: 15 },
    { key: "20-questions", label: "20 questions", questionCount: 20 },
] satisfies Mode[];


const selectedMode = ref<Mode | undefined>();
const startGame = async (mode: Mode) => {
    const searchParams = new URLSearchParams({ mode: JSON.stringify(mode) });
    const modeSearchParamsString = searchParams.toString();
    await navigateTo(`/quiz/?${modeSearchParamsString}`);
};
const startButttonVariant = computed(() => selectedMode.value ? "solid" : "questionable");
const handleStart = () => {
    if (!selectedMode.value) return;
    startGame(selectedMode.value);
};
</script>
