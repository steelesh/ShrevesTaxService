<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Privacy Policy',
    icon: 'i-heroicons-eye-slash',
    to: '/privacy'
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
