<template>
  <div
    class="blurbg shadow flex flex-col justify-center gap-8 bg-[color:var(--brand-navbar)] p-4 rounded-3xl min-h-full"
  >
    <slot />
  </div>
</template>

<style>
.blurbg {
  backdrop-filter: blur(2rem);
}
</style>
