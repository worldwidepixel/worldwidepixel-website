<template>

    <span class="text-[4rem]">
        <span class="font-bold"> My current </span>
        <span class="font-bold brand-gradient"> projects. </span>
        <span class="text-sm">(and orgs)</span>
    </span>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> Badger </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://badger.worldwidepixel.ca/img/badger.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            A badge generator for the web.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://badger.worldwidepixel.ca"> <user> Website <LucideBadge /> </user> </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> Serv-ify </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://projects.worldwidepixel.ca/servify512.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            Find Minecraft server info, relatively easily.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://projects.worldwidepixel.ca/servify">
            <user> Website
                <LucideServer />
            </user>
        </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> Name-ify </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://projects.worldwidepixel.ca/nameify512.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            A simple Minecraft nickname formatting generator.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://projects.worldwidepixel.ca/nameify">
            <user> Website
                <LucideBookA />
            </user>
        </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> imateapot.xyz </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://www.imateapot.xyz/favicon.ico">

        </ProjectTitleBar>

        <ProjectParagraph>

            I am a teapot. Are you?

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://imateapot.xyz/">
            <user> Website
                <LucideCoffee />
            </user>
        </NuxtLink>

    </div>


    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> Loop <ProjectBadge>ORG</ProjectBadge>
            </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="~/assets/img/icons/loop.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            An organization dedicated to making Minecraft modding more accessible.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://loopmc.org">
            <user> Website
                <LucideInfinity />
            </user>
        </NuxtLink>

        <NuxtLink to="https://modrinth.com/organization/loop">
            <user> Modrinth
                <LucideBox />
            </user>
        </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> nineMinecraft <ProjectBadge>ORG</ProjectBadge>
            </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://nineminecraft.com/img/9icon.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            A satire 9minecraft clone, and warning site.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://nineminecraft.com">
            <user> Website
                <LucideSiren />
            </user>
        </NuxtLink>

        <NuxtLink to="https://dev.nineminecraft.com">
            <user> Knossos Fork
                <LucideBox />
            </user>
        </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> Hollow </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://raw.githubusercontent.com/CallMeEchoCodes/Hollow/main/src/main/resources/assets/hollow/icon.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            A mod about hollow logs and hollow promises.
            Created with CallMeEcho.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://github.com/CallMeEchoCodes/Hollow">
            <user> Github
                <LucideGithub />
            </user>
        </NuxtLink>

        <NuxtLink to="https://modrinth.com/mod/hollow">
            <user> Modrinth
                <LucideBox />
            </user>
        </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> Minefacts </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1" src="https://facts.worldwidepixel.ca/img/icon.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            One Minecraft fact, every day, for all of 2024.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://facts.worldwidepixel.ca/">
            <user> Website
                <LucideMegaphone />
            </user>
        </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> blueRinth </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1"
                src="https://raw.githubusercontent.com/worldwidepixel/blueRinth/main/img/icon.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            Change the colour of Modrinth.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://addons.mozilla.org/firefox/addon/bluerinth/">
            <user> Mozilla Addons
                <LucideFlame />
            </user>
        </NuxtLink>

    </div>

    <projectContainer>

        <ProjectTitleBar>

            <ProjectTitle> modbar </ProjectTitle>

            <img class="h-12 bg-white rounded-xl p-1"
                src="https://raw.githubusercontent.com/worldwidepixel/modBar/main/img/icon256.png">

        </ProjectTitleBar>

        <ProjectParagraph>

            The easiest way to find your favourite Modrinth projects.

        </ProjectParagraph>

    </projectContainer>

    <div class="flex flex-row gap-4 flex-wrap">

        <NuxtLink to="https://addons.mozilla.org/firefox/addon/themodbar/">
            <user> Mozilla Addons
                <LucideFlame />
            </user>
        </NuxtLink>

    </div>


</template>

<script setup lang="ts">
useSeoMeta({
    title: 'worldwidepixel - projects',
    description: "I make things. On the internet.",
    ogImage: "~/assets/img/icon512.png",
})
</script>
