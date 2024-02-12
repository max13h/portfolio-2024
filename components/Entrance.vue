<template>
  <div class="absolute top-0 left-0 z-[500] w-full h-full">
    <div class="w-full h-full fixed top-0 left-0 z-[501]">
      <div class="w-full h-full flex">
        <div v-for="index in 10" :key="index" class="entrance-line w-[10%] h-full bg-dark"></div>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p class="text-xl font-light overflow-hidden">
          <span class="t-portfoliomax13h text-light text-sm font-light inline-block text-center">Portfolio max13h 2024</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"

const gsapStore = useGsapStore()

onMounted(() => {
  gsap.timeline({
    onComplete: () => { gsapStore.isEntrance = false },
    autoRemoveChildren: true
  })
  .from('.t-portfoliomax13h', {
    yPercent: 100,
    duration: 0.5,
  })
  .to('.t-portfoliomax13h', {
    opacity: 0,
    duration: 0.5,
  }, 1)
  .to('.entrance-line', {
    stagger: 0.1,
    xPercent: (index) => -100 * index - 200,
    duration: 0.5
  }, '-=0.1')
})
</script>

<style scoped>
</style>
