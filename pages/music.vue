<template>
  <span class="text-[4rem]">
    <span class="font-bold"> In my latest venture, I try </span>
    <span class="font-bold brand-gradient"> music. </span>
  </span>

  While just an experiment with a new format currently, I hope to make more.
  This is quite an interesting (and fun) medium!

  <span
    class="flex flex-row flex-wrap gap-2 items-center text-4xl text-white underline decoration-wavy decoration-2 decoration-[var(--brand-bright)]"
  >
    All my music <LucideArrowDown />
  </span>

  <MusicContainer
    v-for="album in music"
    :title="album.title"
    :description="album.desc"
    :icon="album.icon"
    :released="album.date"
    :links="album.links"
  />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "music",
  description: "I make things. On the internet.",
  ogImage: "/img/icon512.png",
});

const music = {
  flare: {
    title: "Flare",
    desc: "Everything that doesn't 'belong' somewhere. Full of failures, rejects, and firsts.",
    icon: "/img/music/flare.png",
    date: "July 1, 2024",
    links: {
      bandcamp: {
        title: "Bandcamp",
        to: "https://worldwidepixel.bandcamp.com/album/flare",
      },
    },
  },
  wildflower: {
    title: "Wildflower",
    desc: "You've got to start somewhere.",
    icon: "/img/music/wildflower.png",
    date: "March 26, 2024",
    links: {
      bandcamp: {
        title: "Bandcamp",
        to: "https://worldwidepixel.bandcamp.com/album/wildflower",
      },
    },
  },
};
</script>
