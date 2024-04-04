<template>

    <span class="text-[4rem]">
        <span class="font-bold"> In my latest venture, I try </span>
        <span class="font-bold brand-gradient"> music. </span>
    </span>

    While just an experiment with a new format currently, I hope to make more. This is quite an interesting (and fun) medium!

    <span class="flex flex-row flex-wrap gap-2 items-center text-4xl text-white underline decoration-wavy decoration-2 decoration-[var(--brand-bright)]"> All my music <LucideArrowDown /> </span>

    <MusicContainer
    title="Wildflower"
    description="You've got to start somewhere."
    icon="/img/music/wildflower.png"
    link="https://worldwidepixel.bandcamp.com/album/wildflower"
    linkTitle="Bandcamp" />

</template>

<script setup lang="ts">
useSeoMeta({
  title: 'worldwidepixel - music',
  description: "I make things. On the internet.",
  ogImage: "/img/icon512.png",
})
</script>