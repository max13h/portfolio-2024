<template>
  <div>
    <div class="
      t-group-mynameis
    ">
      <p class="t-mynameis mix-blend-difference text-light inline-block pe-2 text-big3 text-nowrap text-end w-full me-4">
        My name is <br/>
        <span class="font-bold tracking-widest text-light" style="font-family: 'farnhamtext-regularlfregular';">Maxime</span>
      </p>
      <div class="
        t-imageofme
        rounded-full
        overflow-hidden
        flex
        justify-center
        items-center
        absolute
        top-full
        left-2 sm:left-1/3
        w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64
        h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
        <NuxtImg src="/me.jpg" alt="Picture of max13h" sizes="128px sm:160px md:192px lg:224px xl:256px"></NuxtImg>
      </div>
    </div>

    <div class="divider-block-lg"></div>

    <div class="t-group-imajuniorwebdeveloper">
      <p class="
        t-imajunior
        text-big4
        mix-blend-difference
        text-light
      ">
        I'm a junior
      </p>
      <p ref="webdeveloperLetters" class="t-webdeveloper mix-blend-difference w-full relative inline-block text-big4 text-center font-bold tracking-widest !text-big3">Web Developer</p>
    </div>

    <div class="divider-block-sm"></div>

    <div class="t-group-proficientin">
      <p class="t-proficientin text-big4 text-nowrap text-center mix-blend-difference text-light">Proficient in...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const webdeveloperLetters = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  splitLettersInHTML(webdeveloperLetters, 't-webdeveloper-letters text-light')

  gsap.timeline()
    .from('.t-mynameis', {
      scrollTrigger: {
        trigger: '.t-group-mynameis',
        start: '-200px 45%',
        end: 'top 45%',
        scrub: 1.5,
      },
      opacity: 0,
      filter: "blur(10px)",
      xPercent: 10,
      yPercent: -300,
    })
    .from('.t-imageofme', {
      scrollTrigger: {
        trigger: '.t-group-mynameis',
        start: '-200px 55%',
        end: 'bottom 55%',
        scrub: 1.5,
      },
      opacity: 0,
      yPercent: -1000,
      filter: "blur(10px)",
    })
    .from('html', {
      scrollTrigger: {
        trigger: '.t-group-mynameis',
        start: '-200px 55%',
        end: 'top 55%',
        scrub: 1.5,
      },
      '--opacity-land1': 0,
      '--blur-land1': 'blur(10px)',
    })
    .from('.t-imajunior', {
      scrollTrigger: {
        trigger: '.t-group-imajuniorwebdeveloper',
        start: '-200px 55%',
        end: 'top 55%',
        scrub: 1.5,
      },
      xPercent: -100,
      opacity: 0,
      filter: "blur(10px)",
    })
    .from('.t-webdeveloper-letters', {
      scrollTrigger: {
        trigger: '.t-group-imajuniorwebdeveloper',
        start: '-200 55%',
        end: 'center 55%',
        scrub: 1.5,
      },
      x: (index, target) => {
        const obj = {}
        for (let i = 0; i <= 11; i++) {
          obj[i] = 500 - (i / 11) * 1000;
        }
        return `${obj[index]}%`
      },
      filter: 'blur(10px)',
    })
    .from('.t-webdeveloper', {
      scrollTrigger: {
        trigger: '.t-group-imajuniorwebdeveloper',
        start: '-200 55%',
        end: 'center 55%',
        scrub: 1.5,
      },
      opacity: 0
    })
    .from('html', {
      scrollTrigger: {
        trigger: '.t-group-imajuniorwebdeveloper',
        start: '-200px 55%',
        end: 'top 55%',
        scrub: 1.5,
      },
      '--opacity-land2': 0,
      '--blur-land2': 'blur(10px)',
    })
    .from('.t-proficientin', {
      scrollTrigger: {
        trigger: '.t-group-proficientin',
        start: '-200px 55%',
        end: 'top 55%',
        scrub: 1.5,
        markers: true
      },
      yPercent: -200,
      filter: 'blur(10px)',
      opacity: 0
    })
})
</script>

<style scoped>

.t-group-mynameis,
.t-group-imajuniorwebdeveloper,
.t-group-proficientin {
  @apply relative
}
.t-group-mynameis:after {
  content: '';
  filter: var(--blur-land1);
  opacity: var(--opacity-land1);
  @apply w-full h-[50%] absolute top-1/2 left-0 -translate-y-1/2 bg-dark rounded-3xl xl:rounded-[3rem] -z-10
}
.t-group-imajuniorwebdeveloper:after {
  content: '';
  filter: var(--blur-land2);
  opacity: var(--opacity-land2);
  @apply w-full h-[50%] absolute top-1/2 left-0 -translate-y-1/2 bg-dark rounded-3xl xl:rounded-[3rem] -z-10
}
.t-group-proficientin:after {
  content: '';
  filter: var(--blur-land3);
  opacity: var(--opacity-land3);
  @apply w-full h-full absolute top-1/2 left-0 bg-dark rounded-t-3xl xl:rounded-t-[3rem] -z-10
}
</style>
