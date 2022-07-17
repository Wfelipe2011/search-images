<template>
  <div>
    <base-header
      @change="inputChange"
      :model-value="input"
    />
  </div>
</template>
<script setup lang="ts">
  definePageMeta({
    title: 'Home',
  });
  let time: NodeJS.Timeout | undefined;
  const input = ref('');

  watch(input, value => {
    clearTimeout(time);
    time = setTimeout(() => {
      console.log(value);
    }, 500);
  });

  const inputChange = (value: string) => {
    input.value = value;
  };
</script>
