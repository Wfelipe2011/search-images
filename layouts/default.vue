<template>
  <div class="container min-h-screen">
    <slot />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    setup() {
      const route = useRoute();
      useHead({
        title: computed(() => `${route.meta.title}`),
      });
    },
  });
</script>

<style lang=""></style>
