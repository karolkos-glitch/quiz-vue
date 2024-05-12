<script setup lang="ts" generic="T extends { label: string; key: string }">
import { type ButtonProps } from "~/components/Button.vue";

type ChoicesProps<T> = {
    choices: T[];
    label: string;
    variant?: "inline" | "grid";
};

const props = withDefaults(defineProps<ChoicesProps<T>>(), {
    variant: "inline",
});

const choicesWrapperClassValueMap: Record<
    NonNullable<ChoicesProps<T>["variant"]>,
    string
> = {
    inline: "flex flex-col items-center justify-center gap-2 sm:flex-row",
    grid: "grid justify-center items-center gap-2 sm:grid-flow-col sm:grid-rows-2",
};
const choicesWrapperClass = choicesWrapperClassValueMap[props.variant];

const getButtonVariant = <D extends { key: string }>(
    selectedMode: D | null,
    modeFromChoices: T
): ButtonProps["variant"] => {
    if (!selectedMode) return "questionable";
    return selectedMode.key === modeFromChoices.key ? "solid" : "questionable";
};

const emit = defineEmits(["choice"]);

const onClick = (choice: T) => {
    selectedModel.value = choice;
};

const selectedModel = defineModel<T>();
const isButtonSelected = (choice: T) => {
    return selectedModel.value?.key === choice.key;
};

</script>

<template>
    <div class="flex flex-col w-[75%] gap-y-4">
        <Typography variant="secondary" class="text-3xl text-center font-light">
            {{ props.label }}
        </Typography>
        <div :class="choicesWrapperClass">
            <template v-for="choice in props.choices" :key="choice.key">
                <Button v-if="isButtonSelected(choice)" type="button" variant="solid" @click="() => onClick(choice)">
                    {{ choice.label }}
                </Button>
                <Button v-if="!isButtonSelected(choice)" @click="() => onClick(choice)" type="button"
                    variant="questionable">
                    {{ choice.label }}
                </Button>
            </template>
        </div>
    </div>
</template>