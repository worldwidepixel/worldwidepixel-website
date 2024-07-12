<template>
  <div class="gap-8 flex-col flex">
    <div
      class="flex flex-col gap-8 bg-[color:var(--brand-colour)] p-4 rounded-2xl"
    >
      <span class="flex items-center gap-4">
        <!-- PROJECT TITLE -->
        <span
          class="gap-4 flex flex-row items-center text-[color:var(--big-text-colour)] text-5xl font-bold"
        >
          {{ name }}
          <span
            v-if="badge.show"
            class="w-fit text-sm bg-[var(--brand-bright)] p-2 rounded-xl select-none text-[color:var(--brand-colour)]"
          >
            {{ badge.text }}
          </span>
        </span>
        <!-- PROJECT ICON -->
        <img class="h-12 bg-white rounded-xl p-1" :src="icon" />
      </span>
      <!-- PROJECT DESCRIPTION -->
      <div class="text-2xl">
        {{ desc }}
      </div>
    </div>

    <div class="flex flex-row gap-4 flex-wrap">
      <NuxtLink v-for="link in links" :to="link.to">
        <span
          class="gap-4 flex flex-row font-bold text-2xl bg-[color:var(--brand-colour)] items-center p-4 rounded-2xl select-none duration-[0.4s] active:scale-[0.9]"
        >
          {{ link.name }}
          <LucideArrowUpRight />
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  name: String,
  desc: String,
  icon: String,
  links: Object,
  badge: {
    type: Object,
    default: {
      show: false,
      text: "undefined",
    },
  },
});
</script>
