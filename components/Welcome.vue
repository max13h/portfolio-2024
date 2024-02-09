<template>
  <div class="whole-panel sticky top-0 -z-50 w-full h-screen overflow-hidden flex justify-center items-center">
    <h1 class="text-big1 w-full text-center inline-block">
        <span :ref="letters[0]" >Hello, I'm </span>
        <span class="flex flex-wrap justify-center">
          <span :ref="letters[1]" class="max13h relative">max13h</span>
        </span>
    </h1>
    <div class="scroll-down absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
      <p>Scroll down !</p>
      <Icon name="fluent:arrow-circle-down-12-filled" size="2rem"  />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { CustomEase } from "gsap/CustomEase"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const letters = [ref(), ref()]
const gsapStore = useGsapStore()

onMounted(() => {
  letters.map((el) => {
    splitLettersInHTML(el, 'letter')
  })

  gsap.registerPlugin(CustomEase)
  gsap.registerPlugin(ScrollTrigger)

  gsap.timeline().delay(2.5)
    .to('.letter', {
      scrollTrigger: {
        trigger: '.letter',
        start: 'bottom center',
        end: '+=300px',
        scrub: 0.3,
      },
      yPercent: -200,
      xPercent: (index, target) => {
        const obj = {}
        for (let i = 0; i < 9; i++) {
          const value = -500 + (i * (1000 / 8));
          obj[i] = value;
        }
        for (let i = 0; i < 7; i++) {
          const value = -200 + (i * (400 / 5));
          obj[i + 9] = value;
        }
        return obj[index]
      },
      opacity: 0
    })
    .to('.scroll-down', {
      scrollTrigger: {
        trigger: '.letter',
        start: 'bottom center',
        end: '+=300px',
        scrub: 1,
      },
      yPercent: -500,
      opacity: 0
    })
    .from('.letter', {
      xPercent: 5000,
      duration: 1,
      stagger: 0.05,
      ease: CustomEase.create("custom", "M0,0 C0.169,0.85 0.054,1.025 1,1 "),
    })
    .to('.letter', {
      rotate: () => `-${Math.floor(Math.random() * 20  + 10)}`,
      duration: 0.1,
      delay: 0.3,
      stagger: 0.06,
    }, '<')
    .to('.letter', {
      rotate: () => `${Math.floor(Math.random() * 16 - 8)}`,
      duration: 0.5,
      delay: 0.6,
      stagger: 0.06,
    }, '<')
    .to('.max13h', {
      overflow: 'hidden'
    })
    .to('html', {
      '--display-circle': 'block'
    }, '<')
    .to('html', {
      duration: 0.4,
      '--bottom-circle': -50
    }, '<')
    .to('.max13h', {
      duration: 0.1,
      fontFamily: 'farnhamtext-regularlfregular',
    })
    .to('html', {
      duration: 0.4,
      '--bottom-circle': 100,
      onComplete: () => { gsapStore.isWelcomed = true }
    }, '<')
    .to('html', {
      '--display-circle': 'none',
      overflow: 'visible'
    })
    .to('.max13h', {
      overflow: 'visible'
    }, '<')
    .from('.scroll-down', {
      duration: 0.3,
      opacity: 0
    }, '<')
    .from('nav', {
        duration: 1,
        opacity: 0,
      }, '<')
})
</script>

<style scoped>
h1 {
  position: relative;
}

h1 .letter {
  display: inline-block;
}

.max13h::after {
  content: '';
  position: absolute;
  bottom: var(--bottom-circle);
  display: var(--display-circle);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
  width: calc(7rem + 50vw);
  height: calc(7rem + 50vw);
  @apply bg-light
}

</style>
