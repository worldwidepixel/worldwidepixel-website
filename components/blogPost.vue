<template>
  <div
    v-if="hidden === 'false' || hidden === undefined"
    class="flex flex-col lg:flex-row gap-4 bg-[#041d30] p-6 rounded-[3rem] justify-between"
  >
    <div class="sm:justify-center flex flex-col gap-2">
      <NuxtLink
        :to="to"
        class="text-4xl font-bold text-[var(--big-text-colour)]"
      >
        {{ title }}
      </NuxtLink>

      <span class="flex flex-col sm:flex-row sm:items-center gap-2">
        <span class="text-xl font-light"> {{ date }} </span>

        <div class="flex flex-row flex-wrap gap-4">
          <div
            v-for="(author, index) in authors"
            :key="index"
            class="w-fit flex flex-row gap-2 items-center p-1.5 bg-[var(--brand-background)] rounded-full max-w-full"
          >
            <img
              :src="author.avatar.src"
              :alt="author.name"
              :target="author.avatar.target"
              class="h-8 rounded-full max-w-full"
            />
            <NuxtLink
              :to="author.to"
              target="_blank"
              class="text-base max-w-full"
              >{{ author.name }}</NuxtLink
            >
          </div>
        </div>
      </span>

      <span class=""> {{ description }} </span>

      <!-- <span> {{ hidden }} </span> -->

      <ProjectBadge v-if="badge"> {{ badge.label }} </ProjectBadge>
    </div>

    <img
      class="lg:w-min w-full object-contain lg:max-w-[30rem] rounded-3xl"
      v-if="image && typeof image === 'object' && 'src' in image"
      :src="image.src"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
  image: Object,
  authors: Array as () => Author[],
  date: String,
  badge: Object,
  to: String,
  hidden: String,
});

interface Avatar {
  src: string;
  target: string;
}

interface Author {
  avatar: Avatar;
  name: string;
  to: string;
}
</script>
