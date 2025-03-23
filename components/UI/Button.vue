<script setup lang="ts">
defineComponent({
  name: 'UIButton',
});

interface Props {
  type?: 'button' | 'submit';
  aspect?: 'outlined' | 'default';
  color?: 'primary' | 'accent' | 'danger' | 'info' | 'warning' | 'success';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  aspect: 'default',
  color: 'primary',
  size: 'small',
});

const sizeClass = {
  small: 'text-sm px-5 py-1.5',
  medium: 'text-base px-7 py-2.5',
  large: 'text-base px-8 py-3.5',
};

const colorClass = {
  default: {
    primary: 'bg-primary',
    accent: 'bg-accent',
    danger: 'bg-danger',
    info: 'bg-info',
    warning: 'bg-warning',
    success: 'bg-success',
  },
  outlined: {
    primary: 'text-primary border-primary',
    accent: 'text-accent border-accent',
    danger: 'text-danger border-danger',
    info: 'text-info border-info',
    warning: 'text-warning border-warning',
    success: 'text-success border-success',
  },
};

const typeClass = {
  default: 'text-white disabled:bg-gray-300 disabled:text-gray-400',
  outlined: 'bg-white border disabled:border-gray-300 disabled:text-gray-400',
};

const buttonClass = computed(() =>
  [
    `flex justify-center font-bold rounded-xl active:opacity-70`,
    sizeClass[props.size],
    typeClass[props.aspect],
    colorClass[props.aspect][props.color],
  ].join(' '),
);
</script>

<template>
  <button
    :type="type"
    :class="buttonClass"
    v-bind="$attrs"
    :disabled="loading || disabled"
    class="flex gap-x-2 items-center"
  >
    <slot v-if="!loading" name="left"> </slot>
    <UILoader v-if="loading" class="w-4 h-4 flex-shrink-0"> </UILoader>
    <slot name="default"></slot>
    <slot name="right"></slot>
  </button>
</template>

<style scoped></style>
