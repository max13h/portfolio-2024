<template>
  <section>
    <div class="divider-block-md bg-light"></div>

    <div class="t-contact-heading relative">
      <h2 id="contact"  class="
        t-contactme
        ms-4
        text-big2
        mix-blend-difference
        leading-none
      ">
        <span :ref="contactme[0]" class="text-light ">Let's get in </span><br class="lg:hidden">
        <span :ref="contactme[1]" class="text-light font-serif block">touch</span>
      </h2>
    </div>

    <div class="bg-dark h-[70vh]">
      <div class="flex flex-col sm:flex-row items-center justify-evenly h-full">
        <NuxtLink to="https://www.linkedin.com/in/max13h/" target="_blank" class="w-fit transition-transform duration-500 hover:scale-105">
          <Icon
            name="mdi:linkedin"
            size="16rem"
            class="
              t-contact-icons
              text-light
              w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56
              h-32 sm:h-36 md:h-4w-40 lg:h-48 xl:h-56"
            />
        </NuxtLink>

        <NuxtLink to="mailto:contact@max13h.fr" class="w-fit transition-transform duration-500 hover:scale-105">
          <Icon
            name="fluent:mail-48-filled"
            size="16rem"
            class="
              text-light
              t-contact-icons
              w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56
              h-32 sm:h-36 md:h-4w-40 lg:h-48 xl:h-56"
              @click="copyContent"
            />
        </NuxtLink>
      </div>
      <TransitionRoot appear :show="modalOpened">
        <Dialog @close="modalOpened = false" class="relative z-10">
          <TransitionChild
            as="div"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/50" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4"
            >
              <TransitionChild
                as="div"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel class="bg-light p-8 rounded-2xl shadow-2xl shadow-light/50">
                  <div v-if="isMailCopied" class="text-dark">
                    <Icon name="fluent:checkmark-circle-12-regular" class="text-dark" size="2rem" />
                    Email copied to clipboard !
                  </div>
                  <div v-else class="text-dark flex flex-col items-center">
                    <p class="flex items-center mb-4">
                      <Icon name="fluent:dismiss-circle-12-regular" class="text-dark me-2" size="1.5rem" />
                      An error occures.
                    </p>
                    <p>Please copy my email:</p>
                    <p class="font-bold mt-2">contact@max13h.fr</p>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

const modalOpened = ref(false)
const isMailCopied = ref(false)

const copyContent = async () => {
  modalOpened.value = true

  try {
    await navigator.clipboard.writeText('contact@max13h.fr');
    isMailCopied.value = true

  } catch (err) {
    console.log(err);
    isMailCopied.value = false
  }
}

const contactme = [ref(), ref()]

onMounted(() => {
  contactme.map((el) => splitLettersInHTML(el, 't-contactme-letters text-light'))

  gsap.registerPlugin(ScrollTrigger)

  gsap.timeline({
    scrollTrigger: {
      trigger: '.t-contactme',
      start: 'top 80%',
    },
    autoRemoveChildren: true
  })
  .from('.t-contactme-letters', {
    duration: 2,
    ease: "power4.out",
    opacity: 0,
    yPercent: 50,
    stagger: 0.1,
    onComplete: () => {
      contactme.map((el) => el.value.classList.add('no-translate3D'))
    }
  })
  .from('.t-contact-icons', {
    duration: 2,
    ease: "power4.out",
    xPercent: (index) => index === 0 ? -300 : 300,
    opacity: 0,
  }, '<+=0.7')
})

</script>

<style scoped>
.t-contact-heading:after {
  content: '';
  @apply bg-dark absolute bottom-0 left-0 rounded-t-3xl w-full h-[20%] -z-10
}
</style>
