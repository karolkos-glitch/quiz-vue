<script setup lang="ts">
type TypographyProps = {
    as?: string | Component
    variant?: "primary" | "secondary" | "white" | "green";
    debug?: boolean;
    className?: string;
};

const props = withDefaults(defineProps<TypographyProps>(), {
    as: "span",
    variant: "green",
    className: "",
    debug: false,
})

const getClassNameValuesBySpecificVariant = (
    variant: TypographyProps["variant"]
) => {
    switch (variant) {
        case "white":
            return "text-white";
        case "secondary":
            return "text-typo-300";
        case "primary":
            return "text-primary-300";
        case "green":
            return "text-green-500";
    }
};
const classValue = `${props.className} ${getClassNameValuesBySpecificVariant(props.variant)}  ${props.debug ? "border-2 border-red-900" : ""} `;
</script>

<template>
    <component :is="props.as" :class="props.className">
        <slot />
    </component>
</template>