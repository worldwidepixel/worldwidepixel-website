<template>

    <div class="flex flex-col md:flex-row gap-8	bg-[color:var(--brand-colour)] p-4 rounded-3xl">

        <div class="flex flex-col">

            <img class="w-60 max-w-full bg-white rounded-xl p-1" :src="icon">

        </div>

        <div class="flex flex-col justify-between gap-4">

            <div class="flex flex-col gap-4">

                <ProjectTitle> {{ title }} </ProjectTitle>

                <ProjectParagraph>

                    {{ description }}

                </ProjectParagraph>

                <a :href="link"> <user class="w-fit bg-[var(--brand-background)]"> {{ linkTitle }} <LucidePlayCircle /> </user> </a>

            </div>

            released March 26, 2024

        </div>

    </div>

</template>

<script setup lang="ts">

const props = defineProps({
    title: String,
    description: String,
    icon: String,
    link: String,
    linkTitle: String
  });

</script>