<template>
  <div class="relative overflow-x-hidden">
    <!-- <Entrance v-if="gsapStore.isEntrance" /> -->
    <Navbar />
    <Welcome />
    <AboutMe />
    <div>
      lorem1000
    </div>
    <MyProjects />
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"

const gsapStore = useGsapStore()

onMounted(() => {
  // if(!gsapStore.entranceTL || !gsapStore.welcomeTL) {
  //   throw new Error
  // }

  gsap.timeline()
    // .add(gsapStore.entranceTL())
    .add(gsapStore.welcomeTL(), '-=0.5')
    .add(gsapStore.aboutmeTL(), '<')
    .add(gsapStore.myProjectsTL())

  watchEffect(() => {
    if(gsapStore.isWelcomed) {
      const lenis = useLenis()
    }
  })
})
</script>

<style scoped>
</style>
