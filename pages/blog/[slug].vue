<script setup lang="ts">
import type { BlogPost } from "~/types";

const route = useRoute();

const { data: post } = await useAsyncData(route.path, () =>
  queryContent<BlogPost>(route.path).findOne()
);
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  () =>
    queryContent("/blog")
      .where({ _extension: "md" })
      .without(["body", "excerpt"])
      .sort({ date: -1 })
      .findSurround(route.path),
  { default: () => [] }
);

const date = post.value.date;
const authors = post.value.authors;
const badge = post.value.badge.label;
const title = post.value?.title || post.value.title;
const description = post.value?.description || post.value.description;
const heroImage = post.value.image?.src || "";

useSeoMeta({
  title,
  ogTitle: title + " - blog",
  description,
  ogDescription: description,
  ogImage: heroImage,
});
</script>

<template>
  <div class="flex items-center flex-col gap-6">
    <div class="flex flex-col gap-2 w-full max-w-7xl">
      <span class="text-6xl font-bold text-[color:--big-text-colour]">
        {{ title }}
      </span>

      <time class="italic text-gray-400">{{
        new Date(date).toLocaleDateString("en", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      }}</time>

      <div class="flex flex-row gap-2 items-center">
        <div
          v-for="(author, index) in authors"
          :key="index"
          :to="author.to"
          color="white"
          target="_blank"
          class="w-fit flex flex-row gap-2 items-center p-1.5 bg-[var(--brand-colour)] rounded-full max-w-full"
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

        <ProjectBadge> {{ badge }} </ProjectBadge>
      </div>

      <span class="text-xl font-light text-[color:--big-text-colour]">
        {{ description }}
      </span>

      <hr />
    </div>

    <PostContainer>
      <ContentRenderer
        class="disable-preflight blogrenderer"
        v-if="post && post.body"
        :value="post"
      />
    </PostContainer>
  </div>
</template>

<style>
code {
  background-color: var(--brand-background) !important;
  padding: 0.2rem !important;
  border-radius: 12px !important;
}

.blogrenderer {
  img {
    width: 100%;
  }
  h1 {
    color: var(--big-text-colour);
  }
  h2 {
    color: var(--big-text-colour);
  }
  h3 {
    color: var(--big-text-colour);
  }
}

.disable-preflight {
  * {
    all: revert;
    a {
      color: var(--big-text-colour);
    }
    img {
      max-width: 100% !important;
      border-radius: 1rem !important;
    }
    h1 {
      color: var(--big-text-colour);
    }
    h2 {
      color: var(--big-text-colour);
    }
  }
}
</style>
