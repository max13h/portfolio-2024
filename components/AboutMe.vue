<template>
  <div class="aboutme overflow-hidden">
    <div class="bg-dark rounded-t-[128px] w-full h-16 translate-y-1"></div>
    <div class="w-full min-h-screen bg-dark  ">
      <h2 class="trigger-aboutme block p-4 text-light">About me</h2>
      <div class="p-8">
        <div class="w-full relative">
          <p class="mynameis bg-red-400 inline-block text-big3 text-nowrap text-end w-full">My name is <br/> <span class="font-bold tracking-widest">Maxime</span></p>
          <div class="opacity-80 rounded-full overflow-hidden flex justify-center items-center absolute top-1/2 right-1/2
            w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64
            h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
            <NuxtImg src="/me.jpg" alt="Picture of max13h" sizes="128px sm:160px md:192px lg:224px xl:256px"></NuxtImg>
          </div>
        </div>
        <p class="text-big4 mt-32">I'm a junior</p>
        <p class="text-big4 text-center font-bold tracking-widest">Web Developer</p>
        <p class="text-big5 text-nowrap text-center mt-32 mb-16">Proficient in...</p>
        <div class="w-full flex flex-col items-center md:flex-row md:justify-evenly">
          <div class="backend flex flex-col items-center">
            <p class="text-big4 font-semibold">Back-end</p>
            <p class="text-big6 opacity-75 -translate-y-4">development</p>
            <p class="text-base opacity-50">My technologies:</p>

            <div class="flex flex-wrap justify-evenly items-center max-w-72 sm:max-w-80 md:max-w-96 lg:max-w-md xl:max-w-lg">

              <VDropdown theme="max13h" @apply-show="isActive = 'ruby'" @hide="isActive = ''" class="m-2" >
                <Icon name="vscode-icons:file-type-ruby" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'ruby'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://www.ruby-lang.org/" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      Ruby
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">Programming language </p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">A really pleasant language to use for me. I learned the job with it at my bootcamp</q>
                  </div>
                </template>
              </VDropdown>

              <VDropdown theme="max13h" @apply-show="isActive = 'rubyOnRails'" @hide="isActive = ''" class="m-2" >
                <Icon name="simple-icons:rubyonrails" size="8rem" class="techno-icon-rails w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-rails-active': isActive === 'rubyOnRails'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://rubyonrails.org/" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      Ruby on Rails
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">Web application framework</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">My first web framework. <br> Make me realise how fun and interesting build websites could be</q>
                  </div>
                </template>
              </VDropdown>

              <VDropdown theme="max13h" @apply-show="isActive = 'postgreSQL'" @hide="isActive = ''" class="m-2" >
                <Icon name="logos:postgresql" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'postgreSQL'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://www.postgresql.org/" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      PostgreSQL
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">Object-relational database system</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">My solution for data storage. A highly complete and comprehensive tool that I haven't fully explored</q>
                  </div>
                </template>
              </VDropdown>

              <VDropdown theme="max13h" @apply-show="isActive = 'nuxt'" @hide="isActive = ''" class="m-2" >
                <Icon name="logos:nuxt-icon" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'nuxt'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://nuxt.com" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      Nuxt
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">Web application framework</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">The website you're currently on was built with this framework. I love how easy and fast I fully learned this tool</q>
                  </div>
                </template>
              </VDropdown>

              <VDropdown theme="max13h" @apply-show="isActive = 'node'" @hide="isActive = ''" class="m-2" >
                <Icon name="logos:nodejs-icon" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'node'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://nodejs.org/en" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      Node JS
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">JavaScript runtime environment</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">I became acquainted with Node after learning JavaScript and experimenting with Nuxt server-side rendering.</q>
                  </div>
                </template>
              </VDropdown>

            </div>
          </div>

          <p class="text-big5 my-12 md:self-start md:mt-8">&</p>

          <div class="frontend flex flex-col items-center">
            <p class="text-big4 font-semibold">Front-end</p>
            <p class="text-big6 opacity-75 -translate-y-4">development</p>
            <p class="text-base opacity-50">My technologies:</p>
            <div class="flex flex-wrap justify-evenly items-center max-w-72 sm:max-w-80 md:max-w-96 lg:max-w-md xl:max-w-lg">

              <VDropdown theme="max13h" @apply-show="isActive = 'vue'" @hide="isActive = ''" class="m-2">
                <Icon name="logos:vue" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'vue'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://www.vuejs.org/" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      Vue
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">JavaScript Framework</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">My first JavaScript framework, which helped me take a big step in my journey as a junior developer. And beyond that, a really nice ecosystem</q>
                  </div>
                </template>
              </VDropdown>

              <VDropdown theme="max13h" @apply-show="isActive = 'javascript'" @hide="isActive = ''" class="m-2">
                <Icon name="devicon:javascript" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'javascript'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      Javascript
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">Programming language</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">This language and how big his ecosystem is on the web fascinates me. I really enjoy build things with it</q>
                  </div>
                </template>
              </VDropdown>

              <VDropdown theme="max13h" @apply-show="isActive = 'typescript'" @hide="isActive = ''" class="m-2">
              <Icon name="devicon:typescript" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'typescript'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://www.typescriptlang.org" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      Typescript
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">Programming language</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">Javascript's stronger and bigger but 'not funny' brother. I've worked with it, but haven't delved into it enough to really enjoy it.</q>
                  </div>
                </template>
              </VDropdown>

              <VDropdown theme="max13h" @apply-show="isActive = 'css'" @hide="isActive = ''" class="m-2">
                <Icon name="devicon:css3" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'css'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      CSS
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">Stylesheet language</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">I found myself scrolling through the CSS documentation just out of curiosity. I love how powerful and far-reaching CSS can be on HTML</q>
                  </div>
                </template>
              </VDropdown>

              <VDropdown theme="max13h" @apply-show="isActive = 'tailwind'" @hide="isActive = ''" class="m-2">
                <Icon name="logos:tailwindcss-icon" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" :class="{'techno-icon-active': isActive === 'tailwind'}" />

                <template #popper>
                  <div class="text-center">
                    <NuxtLink to="https://tailwindcss.com" rel="external noopener" target="_blank" class="flex justify-center items-center">
                      Tailwind
                      <Icon name="fluent:open-12-regular" class="ms-1"/>
                    </NuxtLink>
                    <p class="font-thin text-sm">CSS framework</p>

                    <q class="italic opacity-50 max-w-64 inline-block mt-4">I started with Bootstrap in my Bootcamp. Then I discovered Tailwind, which align much more with what I needed from a CSS framework</q>
                  </div>
                </template>
              </VDropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const isActive = ref('')
const gsapStore = useGsapStore()

onMounted(() => {
    const aboutmeTL = () => {
    gsap.registerPlugin(ScrollTrigger)

    return gsap.timeline()
      .from('.mynameis', {
        scrollTrigger: {
          trigger: '.trigger-aboutme',
          start: '-300% center',
          end: '+=200',
          // markers: true,
          scrub: 1,
          pin: '.mynameis',
          pinReparent: true
        },
        x: '1000px',
      })
  }

  gsapStore.aboutmeTL = aboutmeTL
})
</script>

<style scoped>
.techno-icon {
  @apply transition-all duration-500;
  filter: saturate(0);
  opacity: 0.8;
  cursor: pointer;
}
.techno-icon:hover {
  filter: none;
  opacity: 1;
}
.techno-icon-active {
  filter: none;
  opacity: 1;
}

.techno-icon-rails {
  @apply transition-all duration-500;
  filter: brightness(0%) saturate(100%) invert(100%) sepia(0%) saturate(0%) brightness(0%) contrast(0%);
  opacity: 0.8;
  cursor: pointer;
}
.techno-icon-rails:hover {
  filter: brightness(0) saturate(100%) invert(20%) sepia(84%) saturate(5919%) brightness(73%) contrast(120%);
  opacity: 1;
}

.techno-icon-rails-active {
  filter: brightness(0) saturate(100%) invert(20%) sepia(84%) saturate(5919%) brightness(73%) contrast(120%);
  opacity: 1;
}
</style>
