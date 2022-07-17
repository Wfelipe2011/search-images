<template>
  <div class="flex flex-col space-y-2">
    <label
      v-if="props.label"
      :for="props.label"
      >{{ props.label }}</label
    >

    <select
      v-bind="$attrs"
      :id="props.label"
      class="rounded-lg border border-gray-400 bg-white px-4 py-2 shadow-sm"
      @change="onChangeInput"
    >
      <option
        value=""
        selected
      ></option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
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
    options: {
      type: Array,
      required: true,
    },
  });
  const emit = defineEmits(['update:modelValue']);

  const onChangeInput = ($event: Event) => {
    emit('update:modelValue', ($event.target as HTMLSelectElement).value);
  };
</script>
