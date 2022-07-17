<template>
  <component
    :is="props.tag"
    :href="props.href"
    class="gap-2 flex justify-center items-center cursor-pointer rounded-lg py-3 px-10 text-center transition-all duration-300 ease-in-out"
    :class="context[props.variant]"
    v-bind="$attrs"
    @click="emit('click')"
  >
    <slot />
  </component>
</template>

<script setup>
  const props = defineProps({
    tag: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'primary',
    },
  });

  const emit = defineEmits(['click']);

  const context = {
    'primary': 'bg-primary text-white',
    'secondary': 'bg-neutral-100 text-neutral-900 hover:text-neutral-100',
    'outline': 'border border-primary text-primary hover:bg-primary hover:text-neutral-100 hover:border-primary ',
    'ghost': 'btn-ghost text-neutral-900',
    'icon-ghost':
      'bg-transparent border-none text-secondary rounded-full hover:text-neutral-100 lg:hover:bg-neutral-100 lg:hover:text-neutral-900',
  };
</script>
