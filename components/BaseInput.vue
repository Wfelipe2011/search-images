<template>
  <div class="flex flex-col space-y-2">
    <label
      v-if="props.label"
      :for="props.label"
      >{{ props.label }}</label
    >
    <input
      :id="props.label"
      v-bind="$attrs"
      class="rounded-lg border border-gray-400 px-4 py-2 shadow-sm"
      :value="props.modelValue"
      @input="onChangeInput"
    />
  </div>
</template>

<script
  setup
  lang="ts"
>
  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  });

  const emit = defineEmits(['update:modelValue']);
  const onChangeInput = ($event: Event) => {
    emit('update:modelValue', ($event.target as HTMLInputElement).value);
  };
</script>
