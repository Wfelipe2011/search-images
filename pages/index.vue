<template>
  <div>
    <base-header
      class="sticky"
      @change="inputChange"
      :model-value="input"
    />
    <div class="flex justify-center flex-wrap gap-8">
      <div v-for="card in cards">
        <span
          class="absolute text-white px-1"
          :class="card.origin === 'pexels' ? 'bg-primary' : 'bg-gray-800'"
        >
          {{ card.origin }}
        </span>

        <img
          class="max-w-[350px] max-h-[300px] min-w-[350px] min-h-[300px] object-cover cursor-pointer"
          :src="card.urls.medium"
          @click="selectCard(card)"
        />

        <a
          :class="card.origin === 'pexels' ? 'bg-primary' : 'bg-gray-800'"
          class="absolute -mt-6 px-1 text-gray-200 truncate max-w-[350px]"
          target="_blank"
          :href="card.urls.full"
          >{{ card.userName }}</a
        >
        <span class="absolute px-1 text-gray-800 truncate max-w-[350px]">
          {{ card.description }}
        </span>
      </div>
    </div>
    <p class="text-center p-8 text-blue-600 text-display-sm">Aguarde ...</p>
  </div>
</template>
<script setup lang="ts">
  import { IResponseImages } from '~~/interface/IResponseImages';

  definePageMeta({
    title: 'Home',
  });

  onMounted(() => {
    addEventListener('scroll', () => {
      const breakPointHeight = document.body.scrollHeight - 1000;
      console.log(breakPointHeight, window.scrollY);

      if (window.scrollY > breakPointHeight) {
        clearTimeout(time);
        time = setTimeout(async () => {
          page.value = page.value + 1;
        }, 300);
      }
    });
  });

  onMounted(() => {
    input.value = 'nature';
  });

  let time: NodeJS.Timeout | undefined;
  const input = ref('');
  const page = ref(1);
  const cards = ref<IResponseImages[]>([]);

  watch(input, value => {
    clearTimeout(time);
    time = setTimeout(async () => {
      console.log(value);
      cards.value = await getImages();
    }, 500);
  });

  watch(page, async () => {
    const data = await getImages();
    data.forEach(item => cards.value.push(item));
  });

  const inputChange = (value: string) => {
    input.value = value;
  };

  const selectCard = (card: IResponseImages) => {
    window.open(card.urls.full, '_blank');
  };

  const getImages = async () => {
    const res = await fetch(`http://localhost:3000/search?search=${input.value}?page=${page.value}`);
    const data: IResponseImages[] = await res.json();
    return data;
  };
</script>
