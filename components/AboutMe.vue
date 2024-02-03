<template>
  <div class="aboutme">
    <div class="bg-dark rounded-t-[128px] w-full h-16 translate-y-1"></div>
    <div class="w-full min-h-screen bg-dark">
      <h2 class="text-xl font-light p-4">About me</h2>
      <div class="p-8">
        <div class="w-full relative">
          <p class="h2-big text-nowrap text-end">My name is <br/> <span class="font-bold tracking-wider">Maxime</span></p>
          <div class="opacity-80 rounded-full overflow-hidden flex justify-center items-center absolute top-1/2 right-1/2
            w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64
            h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
            <NuxtImg src="/me.jpg" alt="Picture of max13h" sizes="128px sm:160px md:192px lg:224px xl:256px"></NuxtImg>
          </div>
        </div>
        <p class="h3-big text-nowrap mt-32">I'm a <br/> junior <span class="font-bold tracking-wider">Web Developer</span></p>
        <p class="h3-big text-nowrap text-center mt-32">Proficient in...</p>
        <div class="w-full flex justify-evenly items-center">
          <div class="backend flex flex-col items-center">
            <p>Back-end development</p>
            <p>My technologies:</p>
            <div>
              ruby
              rubyonrails
              postgres
            </div>
          </div>
          <p>&</p>
          <div class="frontend">
            <p>Front-end development</p>
            <p>My technologies:</p>
            <div>
              javascript
              vuejs
              nuxtjs
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const gsap = useGsap()
  const gsapStore = useGsapStore()

  const aboutmeTL = () => {
    return gsap.timeline()
      .to(".aboutme", {
        yPercent: -100,
        scrollTrigger: {
          scrub: true
        },
      });
  }

  gsapStore.aboutmeTL = aboutmeTL
})
</script>

<style scoped>
</style>
