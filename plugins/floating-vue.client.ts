import FloatingVue from 'floating-vue'

export default defineNuxtPlugin((nuxtApp) => {
    FloatingVue.options.themes['max13h'] = {
        ...FloatingVue.options.themes.dropdown,
        '$resetCss': true,
        placement: 'bottom',
        distance: 16,
    }

    return
});
