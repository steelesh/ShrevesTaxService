<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Accessibility',
    icon: 'i-heroicons-information-circle',
    to: '/accessibility'
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
