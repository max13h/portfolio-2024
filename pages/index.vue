<template>
  <div class="relative">
    <!-- <Entrance v-if="gsapStore.isEntrance" /> -->
    <Navbar />
    <Welcome />
    <AboutMe />
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
    .add(gsapStore.entranceTL())
    .add(gsapStore.welcomeTL(), '-=0.5')
    .add(gsapStore.aboutmeTL(), '<')

  watchEffect(() => {
    console.log('inside', gsapStore.isWelcomed);
    if(gsapStore.isWelcomed) {
      const lenis = useLenis()
    }
  })
})
</script>

<style scoped>
</style>
