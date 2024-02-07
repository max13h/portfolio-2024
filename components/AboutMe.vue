<template>
  <div>
    <div id="aboutme" class="w-full h-16 bg-dark rounded-t-[8vw]"></div>
    <div class="bg-dark">
      <div class="p-8 relative">
        <AboutMeTextPart />
        <AboutMeStackPart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"

const gsapStore = useGsapStore()

onMounted(() => {
  gsapStore.aboutmeTL = () => {
    if(!gsapStore.aboutMeTextPartTL || !gsapStore.aboutMeStackPartTL) {
      throw new Error
    }
    return gsap.timeline().add(gsapStore.aboutMeTextPartTL()).add(gsapStore.aboutMeStackPartTL())
  }
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
