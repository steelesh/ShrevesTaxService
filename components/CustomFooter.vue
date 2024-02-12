<script setup lang="ts">
const links = [
  {
    label: 'About',
    to: '#about'
  },
  {
    label: 'Services',
    to: '#services'
  },
  {
    label: 'Accessibility',
    to: '#'
  },
  {
    label: 'Privacy',
    to: '#'
  }
];
</script>

<template>
  <UFooter :links="links" class="mb-12" v-motion-fade-visible :delay="100">
    <template #left> Copyright © {{ new Date().getFullYear() }} </template>
    <template #right>
      <UButton
        icon="i-simple-icons-x"
        color="gray"
        variant="ghost"
        to="https://x.com/nuxt_js"
        target="_blank"
      />
      <UButton
        icon="i-simple-icons-discord"
        color="gray"
        variant="ghost"
        to="https://discord.com/invite/ps2h6QT"
        target="_blank"
      />
      <UButton
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
      />
    </template>
  </UFooter>
</template>
