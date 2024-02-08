<template>
  <div class="t-mystack w-full flex flex-col items-center md:flex-row md:justify-evenly">
    <div class="backend flex flex-col items-center">
      <p class="t-backandfront text-big4 font-semibold">Back-end</p>
      <p class="t-backandfront text-big6 opacity-75 -translate-y-4">development</p>
      <p class="text-base opacity-50 t-backandfront">My technologies:</p>

      <div class="flex flex-wrap justify-evenly items-center max-w-72 sm:max-w-80 md:max-w-96 lg:max-w-md xl:max-w-lg">

        <Popover v-for="(technologie, index) in backEndTechnologies" :key="index" v-slot="{ open }" class="relative m-2">
          <PopoverButton>
            <Icon :name="technologie.icon" size="8rem" class="technologie w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'technologie-active': open}" />
          </PopoverButton>
          <PopoverPanel class="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 rounded-2xl z-10 w-screen max-w-64 bg-light text-center">
            <NuxtLink :to="technologie.link" rel="external noopener" target="_blank" class="flex justify-center items-center">
              {{ technologie.name }}
              <Icon name="fluent:open-12-regular" class="ms-1"/>
            </NuxtLink>
            <p class="font-thin text-sm text-dark">{{ technologie.title }}</p>

            <q class="italic opacity-50 max-w-64 inline-block mt-4">{{ technologie.quote }}</q>
          </PopoverPanel>
        </Popover>
      </div>
    </div>

    <p class="t-backandfront text-big5 my-12 md:self-start md:mt-8">&</p>

    <div class="frontend flex flex-col items-center">
      <p class="t-backandfront text-big4 font-semibold">Front-end</p>
      <p class="t-backandfront text-big6 opacity-75 -translate-y-4">development</p>
      <p class="text-base opacity-50 t-backandfront">My technologies:</p>
      <div class="flex flex-wrap justify-evenly items-center max-w-72 sm:max-w-80 md:max-w-96 lg:max-w-md xl:max-w-lg">

        <Popover v-for="(technologie, index) in frontEndTechnologies" :key="index" v-slot="{ open }" class="relative m-2">
          <PopoverButton>
            <Icon :name="technologie.icon" size="8rem" class="technologie w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'technologie-active': open}" />
          </PopoverButton>
          <PopoverPanel class="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 rounded-2xl z-10 w-screen max-w-64 bg-light text-center">
            <NuxtLink :to="technologie.link" rel="external noopener" target="_blank" class="flex justify-center items-center">
              {{ technologie.name }}
              <Icon name="fluent:open-12-regular" class="ms-1"/>
            </NuxtLink>
            <p class="font-thin text-sm text-dark">{{ technologie.title }}</p>

            <q class="italic opacity-50 max-w-64 inline-block mt-4">{{ technologie.quote }}</q>
          </PopoverPanel>
        </Popover>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const isActive = ref('')
const gsapStore = useGsapStore()
const backEndTechnologies = [
  {
    name: 'Ruby',
    icon: 'vscode-icons:file-type-ruby',
    link: 'https://www.ruby-lang.org/',
    title: 'Programming language',
    quote: 'A really pleasant language to use for me. I learned the job with it at my bootcamp'
  },
  {
    name: 'Ruby on Rails',
    icon: 'simple-icons:rubyonrails',
    link: 'https://rubyonrails.org/',
    title: 'Web application framework',
    quote: 'My first web framework. Make me realise how fun and interesting build websites could be'
  },
  {
    name: 'PostgreSQL',
    icon: 'logos:postgresql',
    link: 'https://www.postgresql.org/',
    title: 'Object-relational database system',
    quote: 'My solution for data storage. A highly complete and comprehensive tool that I haven\'t fully explored'
  },
  {
    name: 'Nuxt',
    icon: 'logos:nuxt-icon',
    link: 'https://nuxt.com',
    title: 'Web application framework',
    quote: 'The website you\'re currently on was built with this framework. I love how easy and fast I fully learned this tool'
  },
  {
    name: 'Node JS',
    icon: 'logos:nodejs-icon',
    link: 'https://nodejs.org/en',
    title: 'JavaScript runtime environment',
    quote: 'I became acquainted with Node after learning JavaScript and experimenting with Nuxt server-side rendering.'
  }
  // Add the remaining technologies following the same pattern
];

const frontEndTechnologies = [
  {
    name: 'Vue',
    icon: 'logos:vue',
    link: 'https://www.vuejs.org/',
    title: 'JavaScript Framework',
    quote: 'My first JavaScript framework, which helped me take a big step in my journey as a junior developer. And beyond that, a really nice ecosystem'
  },
  {
    name: 'JavaScript',
    icon: 'devicon:javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    title: 'Programming language',
    quote: 'This language and how big his ecosystem is on the web fascinates me. I really enjoy build things with it'
  },
  {
    name: 'TypeScript',
    icon: 'devicon:typescript',
    link: 'https://www.typescriptlang.org',
    title: 'Programming language',
    quote: "Javascript's stronger and bigger but 'not funny' brother. I've worked with it, but haven't delved into it enough to really enjoy it."
  },
  {
    name: 'CSS',
    icon: 'devicon:css3',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    title: 'Stylesheet language',
    quote: 'I found myself scrolling through the CSS documentation just out of curiosity. I love how powerful and far-reaching CSS can be on HTML'
  },
  {
    name: 'Tailwind',
    icon: 'logos:tailwindcss-icon',
    link: 'https://tailwindcss.com',
    title: 'CSS framework',
    quote: 'I started with Bootstrap in my Bootcamp. Then I discovered Tailwind, which aligns much more with what I needed from a CSS framework'
  }
]

onMounted(() => {
    const aboutMeStackPartTL = () => {
    gsap.registerPlugin(ScrollTrigger)

    return gsap.timeline()
      .from('.t-backandfront', {
        scrollTrigger: {
          trigger: '.t-toppart',
          start: 'bottom center',
          end: '+=100',
          scrub: 1,
        },
        filter: 'blur(10px)',
        opacity: 0,
        scale: 0
      })
      .from('.t-stack-icons', {
        scrollTrigger: {
          trigger: '.t-stack-icons',
          markers: true,
          start: '-100px center',
          end: '+=0px',
          scrub: 3
        },
        filter: 'blur(10px)',
        stagger: 0.2,
        opacity: 0
      })
  }

  gsapStore.aboutMeStackPartTL = aboutMeStackPartTL
})
</script>

<style scoped>
.technologie {
  @apply transition-all duration-500;
  filter: saturate(0);
  opacity: 0.8;
  cursor: pointer;
}
.technologie:hover {
  filter: none;
  opacity: 1;
}
.technologie-active {
  filter: none;
  opacity: 1;
}
</style>
