export const useGsapStore = defineStore("gsap", () => {
  const entranceTL: globalThis.Ref<null | (() => gsap.core.Timeline)> = ref(null)
  const isEntrance = ref(true)

  const welcomeTL: globalThis.Ref<null | (() => gsap.core.Timeline)> = ref(null)
  const isWelcomed = ref(false)
  const aboutmeTL: globalThis.Ref<null | (() => gsap.core.Timeline)> = ref(null)

  return {
    entranceTL,
    isEntrance,
    welcomeTL,
    isWelcomed,
    aboutmeTL,
  }
})
