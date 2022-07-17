<template>
  <div class="w-full p-4 px-8 flex justify-between items-center">
    <div class="w-full flex items-center gap-6">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <span class="bg-primary px-3 rounded-md text-gray-100 text-display-sm">S</span>
        <span class="text-xl"> Images </span>
      </div>
      <!-- Input Search -->
      <div class="w-full max-w-[500px] flex items-center justify-end">
        <input
          type="text"
          class="bg-gray-200 px-4 py-2 rounded-lg w-full"
          placeholder="Search"
          @input="onChangeInput"
          :value="props.modelValue"
          v-bind="$attrs"
        />
        <img
          src="https://img.icons8.com/ios/50/000000/search.png"
          alt="Search"
          class="h-4 absolute px-2"
        />
      </div>
    </div>

    <div class="min-w-[170px] text-center">
      <a
        href="https://nubank.com.br/pagar/1i60u/ICaCdwX5fj"
        target="_blank"
        variant="ghost"
        class="flex gap-2 px-4 hover:opacity-75"
      >
        <span> Pague um café </span>
        <ICoffeeVue class="text-[#6f4e37] -mt-2" />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
  import ICoffeeVue from '~~/assets/icons/ICoffee.vue';

  const props = defineProps({
    modelValue: {
      type: [String, Number],
      default: '',
    },
  });

  const emit = defineEmits(['change']);

  const onChangeInput = ($event: Event) => {
    emit('change', ($event.target as HTMLInputElement).value);
  };
</script>
