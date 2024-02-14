<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Services',
    icon: 'i-heroicons-wrench-screwdriver'
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
