<template>
  <div
    v-if="!isBrowseMenuOpen"
    class="shadow text-[color:var(--big-text-colour)] select-none font-bold bg-[color:var(--brand-navbar)] w-full p-4 rounded-3xl flex flex-row gap-12 items-center text-base justify-center pr-5"
  >
    <NuxtLink
      class="text-lg flex items-center flex-row gap-2"
      to="https://worldwidepixel.ca"
    >
      <Logo class="p-0.5" />
    </NuxtLink>

    <SquareDivider />

    <NuxtLink to="/" class="hidden sm:block"> Home </NuxtLink>

    <NuxtLink to="/projects" class="hidden sm:block"> Projects </NuxtLink>

    <NuxtLink to="/blog" class="hidden sm:block"> Blog </NuxtLink>

    <NuxtLink to="/music" class="hidden sm:block"> Music </NuxtLink>

    <NuxtLink to="" class="block sm:hidden" @click="toggleDropdown">
      <LucideMenu />
    </NuxtLink>
  </div>

  <div
    v-if="isBrowseMenuOpen"
    class="shadow text-[color:var(--big-text-colour)] select-none font-bold bg-[color:var(--brand-navbar)] w-full p-4 rounded-3xl flex flex-col gap-2.5 items-center text-base justify-between sm:justify-normal"
  >
    <div
      class="w-full rounded-3xl flex flex-row gap-12 items-center text-base justify-center pr-1"
    >
      <NuxtLink
        class="text-lg flex items-center flex-row gap-2"
        to="https://worldwidepixel.ca"
      >
        <Logo class="p-0.5" />
      </NuxtLink>

      <SquareDivider />

      <NuxtLink to="" class="block" @click="toggleDropdown">
        <LucideMenu />
      </NuxtLink>
    </div>

    <NuxtLink
      to="/"
      @click="toggleDropdown"
      class="text-center block bg-[color:var(--brand-background)] w-full p-4 rounded-2xl"
    >
      Home
    </NuxtLink>

    <NuxtLink
      to="/projects"
      @click="toggleDropdown"
      class="text-center block bg-[color:var(--brand-background)] w-full p-4 rounded-2xl"
    >
      Projects
    </NuxtLink>

    <NuxtLink
      to="/blog"
      @click="toggleDropdown"
      class="text-center block bg-[color:var(--brand-background)] w-full p-4 rounded-2xl"
    >
      Blog
    </NuxtLink>

    <NuxtLink
      to="/music"
      @click="toggleDropdown"
      class="text-center block bg-[color:var(--brand-background)] w-full p-4 rounded-2xl"
    >
      Music
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const isBrowseMenuOpen = ref(false);
isBrowseMenuOpen.value = false;

function toggleDropdown() {
  isBrowseMenuOpen.value = !isBrowseMenuOpen.value;

  /* if (isBrowseMenuOpen.value) {
    isMobileMenuOpen.value = false
  } */
}

var name = "WorldWidePixel";
</script>
