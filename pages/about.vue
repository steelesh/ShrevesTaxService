<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'About Us',
    icon: 'i-heroicons-user-group'
  }
];
</script>

<template>
  <UPage>
    <UPageBody>
      <UBreadcrumb :links="links" />
    </UPageBody>
  </UPage>
</template>
