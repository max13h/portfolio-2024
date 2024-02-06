<template>
  <div class="absolute top-0 left-0 z-50 w-full h-full">
    <div class="w-full h-screen sticky top-0">
      <div class="w-full h-full flex">
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
        <div class="entrance-line w-[10%] h-full bg-dark"></div>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p class="text-xl font-light" :class="{'overflow-hidden': hiddenOverflow}">
          <span class="text-light heading-pop-up inline-block text-center translate-y-full">Portfolio max13h 2024</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"

const hiddenOverflow = ref(true)

const gsapStore = useGsapStore()

onMounted(() => {
  const entranceTL = () => {
    return gsap.timeline({ onComplete: () => { return gsapStore.isEntrance = false }})
      .to('.heading-pop-up', {
        yPercent: -100,
        duration: 0.5,
        onComplete: () => {
          hiddenOverflow.value = false
        }
      })
      .to('.heading-pop-up', {
        opacity: 0,
        duration: 0.5,
        delay: 1
      })
      .to('.entrance-line', {
        stagger: 0.1,
        xPercent: (index) => -100 * index - 200,
        duration: 0.5
      }, '-=0.1')
  }

  gsapStore.entranceTL = entranceTL
})
</script>

<style scoped>
</style>
