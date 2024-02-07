<template>
  <div class="t-toppart">
    <div class="
      w-full
      absolute
      -top-[7.5rem]
      right-0
      sm:-top-[9.5rem]
      sm:right-4
      md:-top-[10.5rem]
      md:right-8
      lg:-top-[11.5rem]
      lg:right-16
      xl:-top-[14rem]
      xl:right-16
    ">
      <p class="t-mynameis mix-blend-difference inline-block text-big3 text-nowrap text-end w-full">
        My name is <br/>
        <span class="font-bold tracking-widest">Maxime</span>
      </p>
      <div class="
        t-imageofme
        rounded-full
        overflow-hidden
        flex
        justify-center
        items-center
        absolute
        top-2/3
        left-4 sm:left-1/3
        w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64
        h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
        <NuxtImg src="/me.jpg" alt="Picture of max13h" sizes="128px sm:160px md:192px lg:224px xl:256px"></NuxtImg>
      </div>
    </div>
    <p class="
      t-imajunior
      text-big4
      mt-40
      md:mt-48
      lg:mt-56
      xl:mt-64
    ">I'm a junior</p>
    <p ref="webdeveloperLetters" class="t-webdeveloper w-full min-h-24 relative inline-block text-big4 text-center font-bold tracking-widest">Web Developer</p>
    <p class="t-proficientin text-big5 text-nowrap text-center my-32 md:my-40">Proficient in...</p>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const gsapStore = useGsapStore()
const webdeveloperLetters = ref(null)

onMounted(() => {
  const aboutMeTextPartTL = () => {
    gsap.registerPlugin(ScrollTrigger)

    splitLettersInHTML(webdeveloperLetters, 't-webdeveloper-letters')

    return gsap.timeline()
      .from('.t-mynameis', {
        scrollTrigger: {
          trigger: '#aboutme',
          start: '-500% center',
          end: 'bottom center',
          scrub: 1,
        },
        opacity: 0,
        filter: "blur(10px)",
        xPercent: 10,
        yPercent: -300,
      })
      .from('.t-imageofme', {
        scrollTrigger: {
          trigger: '#aboutme',
          start: '-500% center',
          end: 'bottom center',
          scrub: 1,
        },
        opacity: 0,
        yPercent: -1000,
        filter: "blur(10px)",
      })
      .from('.t-imajunior', {
        scrollTrigger: {
          trigger: '.t-imajunior',
          start: '-100px center',
          end: '+=200',
          scrub: 1,
        },
        opacity: 0,
        filter: "blur(10px)",
      })
      .from('.t-webdeveloper-letters', {
        scrollTrigger: {
          trigger: '.t-imajunior',
          start: '-50px center',
          end: '+=200',
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
          trigger: '.t-imajunior',
          start: 'top center',
          end: '+=100',
          scrub: 1,
        },
        opacity: 0
      })
      .from('.t-proficientin', {
        scrollTrigger: {
          trigger: '.t-proficientin',
          start: '-100px center',
          end: '+=100',
          scrub: 1,
        },
        yPercent: -200,
        filter: 'blur(10px)',
        opacity: 0
      })
  }

  gsapStore.aboutMeTextPartTL = aboutMeTextPartTL
})
</script>

<style scoped>

</style>
