<template>
  <div class="w-full h-screen overflow-hidden flex justify-center items-center">
    <h1 class="text-big1 w-full text-center inline-block">
        <span :ref="letters[0]" class="">Hello,</span>
        <span class="flex flex-wrap justify-center">
          <span :ref="letters[1]" class="me-12 ">I'm </span>
          <span :ref="letters[2]" class="">max13h</span>
        </span>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { CustomEase } from "gsap/CustomEase"

const letters = [ref(), ref(), ref()]

onMounted(() => {
  const gsap = useGsap()
  const gsapStore = useGsapStore()

  letters.map((el, index) => {
    el.value.focus
    el.value.innerHTML = el.value.textContent.replace(/\S/g, `<span class='letter inline-block'>$&</span>`);
  })
  const welcomeTL = () => {
    gsap.registerPlugin(CustomEase)

    return gsap.timeline()
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
        onComplete: () => letters[2].value.classList.add('max13h')
      }, '<')

  }
  gsapStore.welcomeTL = welcomeTL
})
</script>

<style scoped>
h1 {
  position: relative;
}

h1 .letter {
  display: inline-block;
}
</style>
