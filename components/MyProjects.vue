<template>
  <div>
    <div class="divider-block-lg bg-dark"></div>

    <div class="t-group-dicoverprojects relative leading-none">
      <h2 ref="discoverprojects" class="t-discoverprojects ms-4 mix-blend-difference text-light inline-block">
        Discover my
        <br>
        <span class="text-light mix-blend-difference">projects</span>
      </h2>
    </div>

    <div class="divider-block-sm"></div>

    <div class="t-group-projects flex flex-col items-center sm:items-start sm:flex-row sm:flex-nowrap sm:overflow-x-scroll overflow-y-auto p-4">
      <div
        v-for="(project, projectIndex) in projects"
        :key="projectIndex"
        class="t-project relative w-[90vw] h-[90vw] mt-4 overflow-hidden rounded-2xl group
          sm:min-w-[75vw]
          sm:h-[75vw]
          md:min-w-[60vh]
          md:h-[60vh]
          sm:me-8
          sm:last:me-0
          sm:mt-0
          cursor-pointer
        "
        @click="openModal(project.name)"
      >
        <NuxtImg :src="project.mainImage" class="w-[150%] transition-all blur-sm group-hover:blur-[2px] group-hover:scale-105" />
        <div class="transition-all group-hover:bg-zinc-900 w-full h-full bg-dark absolute top-0 left-0 opacity-50"></div>
        <h3 class="transition-all group-hover:scale-105   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-big5 text-light w-full text-center">{{ project.name }}</h3>

        <TransitionRoot appear :show="modalOpened === project.name">
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
              <div class="fixed inset-0 bg-light/50" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div
                class="flex min-h-full items-center justify-center p-4"
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
                  <DialogPanel class="bg-dark rounded-2xl h-[90vh] w-[90vw] shadow-2xl shadow-dark/50 overflow-y-scroll flex flex-col">
                    <div class="flex-grow p-8 flex flex-col">
                      <DialogTitle as="h4" class="text-light text-big3 font-semibold leading-none">{{ project.name }}</DialogTitle>
                      <DialogDescription class="text-light my-4 lg:text-xl">{{ project.description }}</DialogDescription>

                      <div class="flex justify-start items-center overflow-y-scroll my-2">
                        <NuxtLink v-for="(techno, technoIndex) in project.stack" :key="technoIndex" :to="techno.link" target="_blank" :tabindex="2 + technoIndex" class="me-2 last:me-0">
                          <Icon v-if="techno.isIcon" :name="techno.icon" size="1.5rem" :class="techno.class" />
                          <NuxtImg v-else :src="techno.imageLink" :alt="`Icon of ${techno.name}`" :class="techno.class" />
                        </NuxtLink>
                      </div>

                      <NuxtLink :to="project.link" target="_blank" tabindex="1" class="bg-gray-300 text-dark md:text-xl px-4 py-2 rounded-3xl w-fit mt-4">
                        {{ project.textLink }}
                      </NuxtLink>
                    </div>
                    <p v-if="project.images.length > 1" class="text-light w-full text-center lg:hidden">
                      Scroll
                      <Icon name="fluent:arrow-right-12-regular" class="filter-light" />
                    </p>
                    <div ref="scroll" class="flex p-4" :class="{'overflow-x-scroll' : project.images.length > 1 }">
                      <NuxtLink
                        v-for="(image, imgIndex) in project.images" :key="imgIndex"
                        :to="image[0] == '/' ? actualURL + image : image"
                        target="_blank"
                        class="min-w-24 sm:min-w-32 mx-4 flex justify-center items-center"
                      >
                        <NuxtImg :src="image" class="mx-4 first:mx-0 rounded-3xl object-cover w-32 sm:w-64 md:w-72 lg:w-96 xl:w-[26rem]" />
                      </NuxtLink>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

const projects = [
{
    name: 'Early stage project',
    mainImage: 'secretproject/logo_secretproject.png',
    description: "The project has the ambition to become a SaaS. I started working on it on november 2023 but due to its early stage and the absence of a legally registered name, I wouldn't share too much information at this time.",
    stack: [
      {
        name: 'Nuxt',
        isIcon: true,
        icon: 'logos:nuxt-icon',
        imageLink: '',
        link: 'https://nuxt.com/',
        class: ''
      },
      {
        name: 'Typescript',
        isIcon: true,
        icon: 'devicon:typescript',
        imageLink: '',
        link: 'https://www.typescriptlang.org/',
        class: ''
      },
      {
        name: 'Typescript',
        isIcon: true,
        icon: 'logos:tailwindcss-icon',
        imageLink: '',
        link: 'https://tailwindcss.com/',
        class: ''
      },
      {
        name: 'Supabase',
        isIcon: true,
        icon: 'logos:supabase-icon',
        imageLink: '',
        link: 'https://supabase.com/',
        class: ''
      },
      {
        name: 'Vite',
        isIcon: true,
        icon: 'vscode-icons:file-type-vite',
        imageLink: '',
        link: 'https://vitejs.dev',
        class: ''
      },
    ],
    link: 'https://github.com/max13h/',
    textLink: 'Check my GH instead',
    images: [
      'secretproject/logo_secretproject.png',
      'secretproject/activity.png',
      'secretproject/commits.png'
    ],
  },
  {
    name: 'The Favorite',
    mainImage: 'https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png',
    description: "The Favorite was my first team project. I led the development of the mobile web app in one month",
    stack: [
      {
        name: 'Ruby',
        isIcon: true,
        icon: 'vscode-icons:file-type-ruby',
        imageLink: '',
        link: 'https://www.ruby-lang.org/',
        class: ''
      },
      {
        isIcon: true,
        name: 'Ruby on Rails',
        icon: 'simple-icons:rubyonrails',
        link: 'https://rubyonrails.org/',
        imageLink: '',
        class: 'filter-red'
      },
      {
        isIcon: true,
        name: 'PostgreSQL',
        icon: 'logos:postgresql',
        link: 'https://www.postgresql.org/',
        imageLink: '',
        class: ''
      },
      {
        isIcon: true,
        name: 'Bootstrap',
        icon: 'logos:bootstrap',
        link: 'https://getbootstrap.com',
        imageLink: '',
        class: ''
      },
      {
        isIcon: false,
        name: 'SwiperJS',
        icon: '',
        link: 'https://swiperjs.com',
        imageLink: 'https://swiperjs.com/images/swiper-logo.svg',
        class: 'w-6'
      },
      {
        isIcon: true,
        name: 'Heroku',
        icon: 'skill-icons:heroku',
        link: 'https://www.heroku.com/',
        imageLink: '',
        class: ''
      },
      {
        isIcon: true,
        name: 'Cloudinary',
        icon: 'logos:cloudinary-icon',
        link: 'https://cloudinary.com/',
        imageLink: '',
        class: ''
      },
    ],
    link: 'https://github.com/max13h/the_favorite',
    textLink: 'Check the repo',
    images: [
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/root.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/home_tasks.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/home_events.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/common_pot.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/kids.png",
    ],
  },
  {
    name: 'Portfolio',
    mainImage: 'https://raw.githubusercontent.com/max13h/portfolio-max13h/master/public/portfolio-max13h.png',
    description: "This is the website you're currently on. I wanted my portfolio to be creative with animations, transitions and showcase my knowledge of CSS in global aspect.",
    stack: [
      {
        name: 'Nuxt',
        isIcon: true,
        icon: 'logos:nuxt-icon',
        imageLink: '',
        link: 'https://nuxt.com/',
        class: ''
      },
      {
        name: 'Typescript',
        isIcon: true,
        icon: 'logos:tailwindcss-icon',
        imageLink: '',
        link: 'https://tailwindcss.com/',
        class: ''
      },
      {
        name: 'GSAP',
        isIcon: false,
        icon: '',
        imageLink: 'https://avatars.githubusercontent.com/u/2386673?s=200&v=4',
        link: 'https://gsap.com/',
        class: 'w-8'
      },
      {
        name: 'CSS',
        isIcon: true,
        icon: 'devicon:css3',
        imageLink: '',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        class: ''
      },
    ],
    link: 'https://github.com/max13h/portfolio-max13h',
    textLink: 'Check the repo',
    images: ['https://raw.githubusercontent.com/max13h/portfolio-max13h/master/public/portfolio-max13h.png'],
  }
]

const modalOpened = ref('')
function closeModal() {
  modalOpened.value = ''
}
function openModal(technologie: string) {
  modalOpened.value = technologie
}

const actualURL = ref()
const discoverprojects = ref()

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  actualURL.value = document.URL
  splitLettersInHTML(discoverprojects, 't-discoverprojects-letters text-light')

  gsap.timeline({
    scrollTrigger: {
      trigger: '.t-group-dicoverprojects',
      start: 'top 80%',
    },
    autoRemoveChildren: true
  })
  .from('.t-discoverprojects', {
    duration: 2,
    ease: "power4.out",
    opacity: 0,
    scale: 3,
    xPercent: 100
  }, 0)
  .from('.t-discoverprojects-letters', {
    duration: 1,
    filter: 'blur(10px)',
    stagger: 0.1,
  }, 0)

  gsap.timeline({
    scrollTrigger: {
      trigger: '.t-group-projects',
      start: 'top 80%',
    },
    autoRemoveChildren: true
  })
  .from('.t-project', {
    yPercent: 200,
    xPercent: 200,
    duration: 2,
    ease: 'power4.out',
    opacity: 0,
    filter: 'blur(10px)',
    stagger: 0.3
  })
})

</script>

<style scoped>
.t-group-dicoverprojects:after {
  content: '';
  @apply bg-dark absolute top-0 left-0 rounded-b-3xl w-full h-[26%] -z-10 lg:h-[50%]
}

.filter-red {
  filter: brightness(0) saturate(100%) invert(20%) sepia(84%) saturate(5919%) brightness(73%) contrast(120%);
}
</style>
