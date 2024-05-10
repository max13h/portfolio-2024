import Lenis from 'lenis'

export const useLenis = () => {
  const lenis = new Lenis()
  const lenisStore = useLenisStore()
  const gsapStore = useGsapStore()

  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  if (!gsapStore.isWelcomed) {
    lenis.stop()
  }

  lenisStore.lenis = lenis
}
