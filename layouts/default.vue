<template>
  <div class="h-dvh flex flex-col">
    <nav class="p-6">
      <navBar />
    </nav>
    <div class="flex justify-center flex-col p-6 gap-8 flex-auto">
      <div class="m-[5%] gap-8 flex-col flex">
        <slot />
      </div>
    </div>

    <pageFooter />
  </div>
</template>

<style>
@import url(https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i|inter:100,200,300,400,500,600,700,800,900);

:root {
  font-family: "DM Sans", Inter, Helvetica, sans-serif;
  --brand-colour: #041d30;
  --brand-bright: #28cbd4;
  --brand-scrollbar: #28cbd4;
  --brand-background: #16181c;
  --brand-navbar: #262a31bf;
  --text-colour: rgb(214, 214, 214);
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
</style>
