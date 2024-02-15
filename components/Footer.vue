<template>
  <footer class="bg-dark w-full text-center text-light text-base">
    {{ new Date().getFullYear() }} - Portfolio
    <NuxtLink to="https://github.com/max13h/" target="_blank" class="inline-flex items-center text-light">
      max13h
      <Icon name="mdi:github" class="ms-1 inline-block"/>
    </NuxtLink>
  </footer>
</template>

<script setup lang="ts">
import type { NuxtLink } from '#build/components';


</script>

<style scoped>

</style>
