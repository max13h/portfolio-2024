<template>
  <div>
    <div class="divider-block-screen bg-dark"></div>

    <div class="t-group-dicoverprojects relative leading-none">
      <h2 ref="discoverprojectsheading" class="t-discoverprojects ms-4 mix-blend-difference text-light inline-block">
        <span :ref="discoverprojects[0]" class="text-light ">Discover my </span><br class="lg:hidden">
        <span :ref="discoverprojects[1]" class="text-light font-serif block">projects</span>
      </h2>
    </div>

    <div class="divider-block-sm"></div>

    <div class="t-group-projects flex flex-col items-center sm:items-start sm:flex-row sm:flex-nowrap sm:overflow-x-scroll overflow-y-auto p-4">
      <ProjectsCards />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const discoverprojects = [ref(), ref()]
const discoverprojectsheading = ref()

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  discoverprojects.map((el) => splitLettersInHTML(el, 't-discoverprojects-letters text-light'))

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
    xPercent: 100,
    onComplete: () => {discoverprojectsheading.value.classList.add('no-translate3D')}
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
  @apply bg-dark absolute top-0 left-0 rounded-b-3xl w-full h-[26%] -z-10 lg:h-[80%]
}
</style>
