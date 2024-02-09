import Lenis from '@studio-freight/lenis'

export const useLenisStore = defineStore("lenis", () => {
  const lenis: any = ref(null)

  return {
    lenis,
  }
})
