<template>
    <button :class="classValue" :disabled="props.disabled" @click="onClick">
        <slot />
    </button>
</template>

<script setup lang="ts">

export type ButtonProps = {
    disabled: boolean;
    variant: "solid" | "questionable" | "outlined";
};

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    variant: {
        type: String as PropType<ButtonProps["variant"]>,
        default: "solid",
    },
});

const getClassNameValuesBySpecificVariant = (
    variant: ButtonProps["variant"],
    disabled: ButtonProps["disabled"]
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

const classValue = computed(() => `border-2 text-2xl rounded-md px-4 w-64 py-2 transition font-light ${getClassNameValuesBySpecificVariant(props.variant, props.disabled)}`);

const emit = defineEmits(["click"]);

const onClick = () => {
    emit("click");
};
</script>
