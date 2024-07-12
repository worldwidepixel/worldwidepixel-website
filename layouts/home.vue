<template>
  <canvas
    class="brightness-50 saturate-200"
    id="gradient-canvas"
    data-transition-in
  />

  <div class="flex flex-col h-dvh">
    <nav class="p-6">
      <navBar />
    </nav>
    <main class="flex justify-center flex-col p-6 gap-8 flex-auto">
      <HomeContainer class="grain p-[5%] gap-8 flex-col flex">
        <slot />
      </HomeContainer>
    </main>

    <pageFooter />
  </div>
</template>

<script setup lang="ts">
import { Gradient } from "../public/scripts/Gradient.js";
import "~/types/gradient.d.ts";

const gradient = new Gradient();

onMounted(() => {
  function connectGradient() {
    try {
      gradient.initGradient("#gradient-canvas");
    } catch (error) {
      console.error("An error occurred while initializing Gradient:", error);
    }
  }

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    connectGradient();
  } else {
    document.addEventListener("DOMContentLoaded", connectGradient);
  }
});
</script>

<style>
@import url(https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i|inter:100,200,300,400,500,600,700,800,900);

:root {
  font-family: "DM Sans", Inter, Helvetica, sans-serif;
  --brand-colour: #041d30;
  --brand-bright: #28cbd4;
  --brand-scrollbar: #28cbd4;
  --brand-background: #16181c;
  --brand-navbar: #262a31bf;
  --text-colour: rgb(225, 225, 225);
  --big-text-colour: white;
}

.brand-gradient {
  background: linear-gradient(90deg, #baa5ff 0%, #85b7f6 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

body {
  background-color: var(--brand-background);
  color: var(--text-colour);
}

::-webkit-scrollbar {
  width: 1rem;
}

* {
  scrollbar-color: var(--brand-scrollbar) var(--brand-colour);
}

#gradient-canvas {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  --gradient-color-1: #8e80ff;
  --gradient-color-2: #6ec3f4;
  --gradient-color-3: #fc38ff;
  --gradient-color-4: #b9beff;
}

/*.grain {
  background: url(/img/noiseGrain.svg);
  background-size: 200px 200px;
  backdrop-filter: contrast(1000) brightness(100) opacity(50%) blur(2px);
} */
</style>
