<template>
  <div>
    <div id="aboutme" class="w-full h-16 bg-dark rounded-b-[8vw] relative">
      <h2 class="
        test
        inline-block
        text-big2
        mix-blend-difference
        text-light
        font-medium
        absolute
        -bottom-12
        text-center
        leading-8
      ">Discover my projects</h2>
    </div>

    <div
      class="
        mt-24
        flex
        flex-col
        items-center
        sm:items-start
        sm:flex-row
        sm:flex-nowrap
        sm:overflow-x-scroll
        p-4
      "
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="
          relative
          w-[90vw]
          h-[90vw]
          mt-4
          overflow-hidden
          rounded-2xl
          group
          sm:min-w-[90vw]
          sm:h-[90vw]
          md:min-w-[80vh]
          md:h-[80vh]


          sm:me-8
          sm:last:me-0
          sm:mt-0
        "
        @click="openModal(project.name)"
      >
        <NuxtImg
          :src="project.mainImage"
          class="
            w-[150%]
            transition-all
            blur-sm
            group-hover:blur-[2px]
            group-hover:scale-105
        "/>
        <div class="transition-all group-hover:bg-zinc-900 w-full h-full bg-dark absolute top-0 left-0 opacity-50"></div>
        <h3 class="transition-all group-hover:scale-105   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-big5 text-light w-full text-center">{{ project.name }}</h3>

        <TransitionRoot appear :show="modalOpened === project.name">
          <Dialog @close="closeModal" class="relative z-10">
            <TransitionChild
              as="div"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="fixed inset-0 bg-black/25" />
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
                  <DialogPanel class="bg-dark p-8 rounded-2xl h-[90vh] w-[90vw]">
                    <h3 class="text-light text-big3">{{ project.name }}</h3>
                    <p class="text-big6">{{ project.description }}</p>
                    <div class="flex overflow-x-scroll">
                      <NuxtImg v-for="(image, imgIndex) in project.images" :key="imgIndex" :src="project.images[imgIndex]" class="mx-4" />
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
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

const gsapStore = useGsapStore()

const projects = [
  {
    name: 'The Favorite',
    mainImage: 'https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png',
    description: "My The Favorite offers a humorous take on the burden of parenthood. Parents work as a real team, while having fun competing against each other.",
    images: [
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/root.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/home_tasks.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/home_events.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/common_pot.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/kids.png",
    ],
    link: 'https://github.com/max13h/the_favorite'
  },
  {
    name: 'Early stage project',
    mainImage: 'https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png',
    description: '',
    images: [],
    link: ''
  },
  {
    name: 'Portfolio',
    mainImage: 'https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png',
    description: '',
    images: [],
    link: ''
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
  gsapStore.myProjectsTL = () => {
    return gsap.timeline()
      .to('.test', {
        x: 1000
      })
  }
})
</script>

<style scoped>

</style>
