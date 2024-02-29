<template>

  <span class="text-[4rem]">
      <span class="font-bold"> My </span>
      <span class="font-bold brand-gradient"> blog. </span>
  </span>

  <div class="text-2xl flex gap-4 flex-col">

      <span class="flex flex-row gap-4 items-center"> My place to write and chat. <logo class="p-1" /> </span>

      <blogPost
            v-for="(post, index) in posts"
            :key="index"
            :to="post._path"
            :title="post.title"
            :description="post.description"
            :image="post.image"
            :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
            :authors="post.authors"
            :badge="post.badge"
            :hidden="post.hidden"
          />

  </div>

</template>

<script setup lang="ts">
import type { BlogPost } from "~/types";
import { defineProps } from 'vue';

const { data: page } = await useAsyncData("blog", () => queryContent("/blog").findOne());
if (!page.value) {
throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}


const { data: posts } = await useAsyncData("posts", () => queryContent<BlogPost>("/blog").where({ _extension: "md" }).sort({ date: -1 }).find());

useSeoMeta({
  title: 'worldwidepixel - blog',
  description: "I make things. On the internet.",
  ogImage: "~/assets/img/icon512.png",
})
</script>