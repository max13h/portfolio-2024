<template>
  <section class="t-mystack bg-dark w-full h-full flex flex-col items-center">

    <div class="t-group-backend flex flex-col items-center mt-4 relative z-20">

      <div class="t-group-backend-title">
        <h3 class="t-backend-title text-light text-center mix-blend-difference leading-6">
          Back-end
          <br>
          <span class="text-light text-big6 opacity-75">development</span>
        </h3>
      </div>

      <div class="t-group-backend-technologies flex flex-wrap overflow-hidden justify-evenly items-center p-4 mt-4
        w-[90vw] max-w-[21rem] sm:max-w-[90vw]">
        <div v-for="(technologie, index) in backEndTechnologies" :key="index" class="t-backend-icon relative m-2 sm:mx-4">
          <Icon
            :name="technologie.icon"
            size="8rem"
            class="tech-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
            :class="{
              'tech-icon-active': modalOpened === technologie.name,
              'tech-icon-rails': technologie.name === 'Ruby on Rails',
              'tech-icon-rails-active': modalOpened === 'Ruby on Rails' && technologie.name === 'Ruby on Rails',
            }"
            tabindex="0"
            @click="openModal(technologie.name)"
            @keyup.enter="openModal(technologie.name)"
          />

          <TransitionRoot :show="modalOpened === technologie.name">
            <Dialog @close="closeModal" class="relative z-[400]">
              <TransitionChild
                as="div"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="fixed inset-0 bg-dark/50" />
              </TransitionChild>

              <div class="fixed inset-0 overflow-y-auto">
                <div
                  class="flex min-h-full items-center justify-center p-4 text-center"
                >
                  <TransitionChild
                    as="div"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                  >
                    <DialogPanel class="bg-light p-4 rounded-2xl shadow-2xl shadow-light/50">
                      <Icon
                        :name="technologie.icon"
                        size="8rem"
                        class="mb-4 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                        :class="{
                          'tech-icon-rails-active': technologie.name === 'Ruby on Rails',
                        }"
                      />
                      <DialogTitle as="h4">
                        <NuxtLink :to="technologie.link" tabindex="2" rel="external noopener" target="_blank" class="flex justify-center items-center font-bold text-big6">
                          {{ technologie.name }}
                          <Icon name="fluent:open-12-regular" class="ms-1"/>
                        </NuxtLink>
                        <p class="font-thin text-sm text-dark">{{ technologie.title }}</p>
                      </DialogTitle>
                      <DialogDescription>
                        <q class="italic opacity-50 max-w-64 inline-block mt-4 text-big6 lg:text-xl">{{ technologie.quote }}</q>
                      </DialogDescription>
                      <button
                        type="button"
                        tabindex="1"
                        class="inline-flex justify-center rounded-md border border-transparent bg-gray-300 hover:opacity-90 px-4 py-2 text-sm font-medium mt-4"
                        @click="closeModal"
                      >
                        Close
                      </button>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>
        </div>
      </div>
    </div>

    <p class="t-and text-light text-big5 my-16">&</p>

    <div class="t-group-frontend flex flex-col items-center mt-4 relative z-20">

      <div class="t-group-frontend-title">
        <h3 class="t-frontend-title text-light text-center mix-blend-difference leading-6">
          Front-end
          <br>
          <span class="text-light text-big6 opacity-75">development</span>
        </h3>
      </div>

      <div class="t-group-frontend-technologies flex flex-wrap overflow-hidden justify-evenly items-center p-4 mt-4
        w-[90vw] max-w-[21rem] sm:max-w-[90vw]">
        <div v-for="(technologie, index) in frontEndTechnologies" :key="index" class="t-frontend-icon relative m-2 sm:mx-4">
          <Icon
            :name="technologie.icon"
            size="8rem"
            class="tech-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
            :class="{
              'tech-icon-active': modalOpened === technologie.name,
            }"
            tabindex="0"
            @click="openModal(technologie.name)"
            @keyup.enter="openModal(technologie.name)"
          />

          <TransitionRoot :show="modalOpened === technologie.name">
            <Dialog @close="closeModal" class="relative z-[400]">
              <TransitionChild
                as="div"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="fixed inset-0 bg-dark/50" />
              </TransitionChild>

              <div class="fixed inset-0 overflow-y-auto">
                <div
                  class="flex min-h-full items-center justify-center p-4 text-center"
                >
                  <TransitionChild
                    as="div"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                  >
                    <DialogPanel class="bg-light p-4 rounded-2xl shadow-2xl shadow-light/50">
                      <Icon
                        :name="technologie.icon"
                        size="8rem"
                        class="mb-4 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
                        :class="{
                          'tech-icon-rails-active': technologie.name === 'Ruby on Rails',
                        }"
                      />
                      <DialogTitle as="h4">
                        <NuxtLink :to="technologie.link" tabindex="2" rel="external noopener" target="_blank" class="flex justify-center items-center font-bold text-big6">
                          {{ technologie.name }}
                          <Icon name="fluent:open-12-regular" class="ms-1"/>
                        </NuxtLink>
                        <p class="font-thin text-sm text-dark">{{ technologie.title }}</p>
                      </DialogTitle>
                      <DialogDescription>
                        <q class="italic opacity-50 max-w-64 inline-block mt-4 text-big6 lg:text-xl">{{ technologie.quote }}</q>
                      </DialogDescription>
                      <button
                        type="button"
                        tabindex="1"
                        class="inline-flex justify-center rounded-md border border-transparent bg-gray-300 hover:opacity-90 px-4 py-2 text-sm font-medium mt-4"
                        @click="closeModal"
                      >
                        Close
                      </button>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

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
    quote: 'I became acquainted with Node after learning JavaScript and experimenting with Nuxt server-side rendering and API building.'
  }
  // Add the remaining technologies following the same pattern
]
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

const modalOpened = ref('')
function closeModal() {
  modalOpened.value = ''
}
function openModal(technologie: string) {
  modalOpened.value = technologie
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.timeline({
    scrollTrigger: {
      trigger: '.t-group-backend',
      start: 'top 80%',
    },
    autoRemoveChildren: true
  })
  .from('.t-backend-title', {
    duration: 2,
    ease: "power4.out",
    filter: 'blur(10px)',
    opacity: 0,
    scale: 0,
    xPercent: -500
  })
  .from('html', {
    duration: 2,
    ease: "power4.out",
    '--blur-land4': 'blur(10px)',
    '--opacity-land4': 0,
    '--width-land4': '0%'
  }, '<')
  .from('.t-backend-icon', {
    ease: "power4.out",
    filter: 'blur(10px)',
    opacity: 0,
    yPercent: 200,
    duration: 1.5,
    stagger: 0.3
  }, '>-=1')

  gsap.from('.t-and', {
    scrollTrigger: {
      trigger: '.t-and',
      start: 'top 80%'
    },
    filter: 'blur(10px)',
    opacity: 0,
    scale: 0,
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: '.t-group-frontend',
      start: 'top 80%',
    },
    autoRemoveChildren: true
  })
  .from('.t-frontend-title', {
    duration: 2,
    ease: "power4.out",
    filter: 'blur(10px)',
    opacity: 0,
    scale: 0,
    xPercent: 500
  })
  .from('html', {
    duration: 2,
    ease: "power5.out",
    '--blur-land5': 'blur(10px)',
    '--opacity-land5': 0,
    '--height-land5': '0%'
  }, '<')
  .from('.t-frontend-icon', {
    ease: "power4.out",
    filter: 'blur(10px)',
    opacity: 0,
    yPercent: -200,
    duration: 1.5,
    stagger: 0.3
  }, '>-=1')
})
</script>

<style scoped>
.tech-icon {
  @apply transition-all duration-500;
  filter: saturate(0);
  cursor: pointer;
}
.tech-icon:hover {
  filter: none;
  opacity: 1;
}
.tech-icon-active {
  filter: none;
  opacity: 1;
}

.tech-icon-rails {
  @apply transition-all duration-500;
  filter: brightness(0%) saturate(100%) invert(100%) sepia(0%) saturate(0%) brightness(0%) contrast(0%);
  cursor: pointer;
}
.tech-icon-rails:hover {
  filter: brightness(0) saturate(100%) invert(20%) sepia(84%) saturate(5919%) brightness(73%) contrast(120%);
  opacity: 1;
}

.tech-icon-rails-active {
  filter: brightness(0) saturate(100%) invert(20%) sepia(84%) saturate(5919%) brightness(73%) contrast(120%);
  opacity: 1;
}

.t-group-backend:after {
  content: '';
  opacity: var(--opacity-land4);
  filter: var(--blur-land4);
  width: var(--width-land4);
  @apply bg-light h-[94%] rounded-3xl absolute bottom-0 left-1/2 -translate-x-1/2 -z-10
}
.t-group-frontend:after {
  content: '';
  opacity: var(--opacity-land5);
  filter: var(--blur-land5);
  height: var(--height-land5);
  @apply bg-light w-full rounded-3xl absolute bottom-0 left-1/2 -translate-x-1/2 -z-10
}
</style>
