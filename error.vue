<template>

    <NuxtLayout>

    <span class="text-[8rem] flex flex-col">
        <span class="font-bold text-[color:var(--big-text-colour)]"> {{ error.statusCode }} </span>
        <code class="text-[1rem]"> {{ error.url }} </code>
    </span>

    <div class="text-2xl">

        <span class="flex flex-row gap-4 items-center"> {{ error.message }} <logo class="p-1" /> </span>

    </div>

    <!--<div class="text-2xl">

        This is some template text
        that WorldWidePixel made for <NuxtLink class="underline" to="https://worldwidepixel.ca">You</NuxtLink>.

    </div>-->

    <span class="text-5xl font-bold text-[color:var(--big-text-colour)]"> Other Pages </span>

    <div class="flex flex-row gap-4 flex-wrap">

        <a href="/"> <user> Home <LucideBook /> </user> </a>

        <a href="/projects"> <user> Projects <LucideGithub /> </user> </a>

        <a href="/blog"> <user> Blog <LucideGamepad2 /> </user> </a>

    </div>

</NuxtLayout>

</template>

<script lang="ts">
export default {
    props: ['error'],
};
</script>