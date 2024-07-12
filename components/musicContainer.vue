<template>
  <div
    class="flex flex-col md:flex-row gap-8 bg-[color:var(--brand-colour)] p-4 rounded-3xl"
  >
    <div class="flex flex-col shrink-0">
      <img
        class="w-60 h-60 aspect-square max-w-full bg-white rounded-xl p-1"
        :src="icon"
      />
    </div>

    <div class="flex flex-col justify-between gap-4">
      <div class="flex flex-col gap-4">
        <ProjectTitle> {{ title }} </ProjectTitle>

        <ProjectParagraph class="wrap shrink grow-0">
          {{ description }}
        </ProjectParagraph>

        <a v-for="link in links" :href="link.to">
          <user class="w-fit bg-[var(--brand-background)]">
            {{ link.title }} <LucidePlayCircle />
          </user>
        </a>
      </div>

      <span>released {{ released }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  icon: String,
  links: Object,
  released: String,
});
</script>
