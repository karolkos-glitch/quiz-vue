<template>
    <button :class="classValue" :disabled="props.disabled" @click="onClick">
        <slot />
    </button>
</template>

<script setup lang="ts">

export type ButtonProps = {
    disabled?: boolean;
    variant?: "solid" | "questionable" | "outlined";
    size?: 'small' | 'medium' | 'large';
};

const props = withDefaults(defineProps<ButtonProps>(), {
    disabled: false,
    variant: "solid",
    size: 'medium',
});

const getClassNameValuesBySpecificVariant = (
    variant: ButtonProps["variant"],
    disabled: ButtonProps["disabled"],
) => {
    if (disabled) return "bg-gray-300 text-gray-500 cursor-not-allowed";

    switch (variant) {
        case "solid":
            return "bg-primary-500 text-white hover:bg-primary-600";
        case "questionable":
            return "bg-primary-300 text-white hover:bg-primary-400";
        case "outlined":
            return "bg-white border-primary-500 text-primary-500 hover:bg-primary-100";
    }
};
const getClassNameValuesBySpecificSize = (size: ButtonProps["size"]) => {
    switch (props.size) {
        case 'small':
            return 'text-sm px-2 w-32 py-1';
        case 'medium':
            return 'text-2xl px-4 w-64 py-2';
        case 'large':
            return 'text-4xl px-8 w-120 py-4';
    }
};

const classValue = computed(() => `border-2 rounded-md  transition font-light ${getClassNameValuesBySpecificVariant(props.variant, props.disabled)} ${getClassNameValuesBySpecificSize(props.size)}`);

const emit = defineEmits(["click"]);

const onClick = () => {
    emit("click");
};
</script>
