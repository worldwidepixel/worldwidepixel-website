<style>
.a {
  align-items: center;
}
</style>
<template>
  <span class="text-[4rem]">
    <PixelWordMark class="fill-white max-w-full" />
  </span>

  <div class="text-2xl">
    <span class="flex flex-row gap-4 items-center">
      I make things. On the internet. <logo class="p-1" />
    </span>
  </div>

  <!--<div class="text-2xl">

        This is some template text
        that WorldWidePixel made for <NuxtLink class="underline" to="https://worldwidepixel.ca">You</NuxtLink>.

    </div>-->

  <span class="text-5xl font-bold text-[color:var(--big-text-colour)]">
    Socials
  </span>

  <div class="flex flex-row gap-4 flex-wrap">
    <NuxtLink to="https://www.youtube.com/@worldwidepixel">
      <User> Youtube <LucidePlayCircle /> </User>
    </NuxtLink>

    <NuxtLink to="https://www.github.com/worldwidepixel/">
      <User> Github <LucideGithub /> </User>
    </NuxtLink>

    <NuxtLink to="https://www.twitch.tv/worldwidepixel">
      <User> Twitch <LucideGamepad2 /> </User>
    </NuxtLink>

    <NuxtLink to="https://mastodon.social/@worldwidepixel">
      <user> Mastodon <LucideText /> </user>
    </NuxtLink>

    <NuxtLink to="https://bsky.app/profile/worldwidepixel.ca">
      <user> Bluesky <LucideBird /> </user>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "home",
  description: "I make things. On the internet.",
  ogImage: "~/assets/img/icon512.png",
});

definePageMeta({
  layout: "home",
});
</script>
