---
title: 'What happens when you download a reposted mod?'
description: "Mod reuploads, malware, and lots of .ru."
image:
  src: /img/generic.png
authors:
  - name: worldwidepixel
    avatar:
      src: https://github.com/worldwidepixel.png
      target: _blank
    to: https://github.com/worldwidepixel
date: 2024-03-15
badge:
  label: discussion
hidden: "true"
---

# What happens when you download a mod from a suspicious reupload?

![A russian mod reuploader.](/img/blog/reposts/minecraft-inside.png)<br>

### When I started contributing to the mod Hollow, I never knew that I would be investigating malware only a week later.

> *Hollow is a Minecraft mod for 1.20.1 which adds features that Mojang has promised. Find out more on the [Modrinth](https://modrinth.com/mod/hollow) page.*

When the lead developer of Hollow, CallMeEcho found out that Hollow was being hosted on a Russian mod reuploader, named MinecraftInside, they instantly took action and contacted them.

![A button that lets users report a mod download.](/img/blog/reposts/report.png)<br>
<sup>*Echo used the site's built-in reporting feature, so I could not get hold of the original request.*</sup>

A couple days later, the page was gone. Echo and I thought they had won. Then I started digging. I found a Russian blog post with the mod's name on Google, and started us down the rabbit hole.

![The blog post that featured Hollow.](/img/blog/reposts/russian-blog.png)<br>
<sup>*The blog post which featured a suspicious download link to Hollow, auto-translated from Russian.*</sup>

When we visited the links, we were met with many URL shorteners. This is when we decided to switch to malware analysing software. Neither of us wanted to risk everything on this.

When I downloaded the file, I got a ZIP file encompassing two (most likely fake or dangerous) EXE installers. One for a VPN named Adguard, and another for an unbranded 'Download Assistant'. 