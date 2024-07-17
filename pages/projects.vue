<template>
  <span class="text-[4rem]">
    <span class="font-bold"> My current </span>
    <span class="font-bold brand-gradient"> projects. </span>
    <span class="text-sm">(and orgs)</span>
  </span>

  <ProjectCard
    v-for="project in projects"
    :name="project.name"
    :desc="project.desc"
    :icon="project.icon"
    :links="project.links"
    :badge="project.badge"
  />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "projects",
  description: "I make things. On the internet.",
  ogImage: "~/assets/img/icon512.png",
});

/*

TEMPLATE:

  project: {
    name: "Name",
    desc: "Desc",
    icon: "Icon",
    links: {
      website: {
        name: "Website",
        icon: "<LucideX />",
        to: "site",
      },
    },
    badge: {
        show: false,
        text: "undefined"
    },
  },

*/

const projects = {
  badger: {
    name: "Badger",
    desc: "A badge generator for the web.",
    icon: "https://badger.worldwidepixel.ca/img/badger.png",
    links: {
      website: {
        name: "Website",
        icon: "badge",
        to: "https://badger.worldwidepixel.ca/",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  bluerinth: {
    name: "blueRinth",
    desc: "Change the colour of Modrinth.",
    icon: "https://raw.githubusercontent.com/worldwidepixel/blueRinth/main/img/icon.png",
    links: {
      mozilla_addons: {
        name: "Mozilla Addons",
        icon: "flame",
        to: "https://addons.mozilla.org/firefox/addon/bluerinth/",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  bombastic: {
    name: "Bombastic",
    desc: "Sending you pipe bombs since 2024.",
    icon: "https://cdn.modrinth.com/data/4PhSSMsR/ec2f60f2a686e7c83ef5d366f817c8f53c92f087.png",
    links: {
      modrinth: {
        name: "Modrinth",
        icon: "box",
        to: "https://modrinth.com/mod/bombastic",
      },
      github: {
        name: "Github",
        icon: "github",
        to: "https://github.com/callmeechocodes/bombastic",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  hollow: {
    name: "Hollow",
    desc: "A mod about hollow logs and hollow promises.",
    icon: "https://raw.githubusercontent.com/CallMeEchoCodes/Hollow/main/src/main/resources/assets/hollow/icon.png",
    links: {
      modrinth: {
        name: "Modrinth",
        icon: "box",
        to: "https://modrinth.com/mod/hollow",
      },
      github: {
        name: "Github",
        icon: "github",
        to: "https://github.com/CallMeEchoCodes/Hollow",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  "imateapot.xyz": {
    name: "imateapot.xyz",
    desc: "I am a teapot. Are you?",
    icon: "https://www.imateapot.xyz/favicon.ico",
    links: {
      website: {
        name: "Website",
        icon: "coffee",
        to: "https://imateapot.xyz/",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  loop: {
    name: "Loop",
    desc: "An organization dedicated to improving the legacy Minecraft experience.",
    icon: "/img/icons/loop.png",
    links: {
      website: {
        name: "Website",
        icon: "infinity",
        to: "https://loopmc.org",
      },
      modrinth: {
        name: "Modrinth",
        icon: "box",
        to: "https://modrinth.com/organization/loop",
      },
    },
    badge: {
      show: true,
      text: "ORG",
    },
  },
  minefacts: {
    name: "Minefacts",
    desc: "One Minecraft fact, every day, for all of 2024.",
    icon: "https://facts.worldwidepixel.ca/img/icon.png",
    links: {
      website: {
        name: "Website",
        icon: "megaphone",
        to: "https://facts.worldwidepixel.ca/",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  modbar: {
    name: "modbar",
    desc: "The easiest way to find your favourite Modrinth projects.",
    icon: "https://raw.githubusercontent.com/worldwidepixel/modBar/main/img/icon256.png",
    links: {
      website: {
        name: "Mozilla Addons",
        icon: "flame",
        to: "https://addons.mozilla.org/firefox/addon/themodbar",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  nameify: {
    name: "Name-ify",
    desc: "A simple Minecraft nickname formatting generator.",
    icon: "https://projects.worldwidepixel.ca/nameify512.png",
    links: {
      website: {
        name: "Website",
        icon: "bookA",
        to: "https://projects.worldwidepixel.ca/nameify",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  nineminecraft: {
    name: "nineMinecraft",
    desc: "A satire 9minecraft clone, and warning site.",
    icon: "https://nineminecraft.com/img/9icon.png",
    links: {
      website: {
        name: "Website",
        icon: "siren",
        to: "https://nineminecraft.com/",
      },
      forksite: {
        name: "Knossos Fork",
        icon: "box",
        to: "https://browse.nineminecraft.com/",
      },
    },
    badge: {
      show: true,
      text: "ORG",
    },
  },
  servify: {
    name: "Serv-ify",
    desc: "Find Minecraft server info, relatively easily.",
    icon: "https://projects.worldwidepixel.ca/servify512.png",
    links: {
      website: {
        name: "Website",
        icon: "server",
        to: "https://projects.worldwidepixel.ca/servify",
      },
    },
    badge: {
      show: false,
      text: "undefined",
    },
  },
  spirit: {
    name: "Spirit Studios",
    desc: "Redefining.",
    icon: "https://avatars.githubusercontent.com/u/175811374?s=200&v=4",
    links: {
      github: {
        name: "Github",
        icon: "github",
        to: "https://github.com/SpiritGameStudios",
      },
      modrinth: {
        name: "Modrinth",
        icon: "box",
        to: "https://modrinth.com/organization/spirit",
      },
    },
    badge: {
      show: true,
      text: "ORG",
    },
  },
};
</script>
