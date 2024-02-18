<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Site Map",
  meta: [
    {
      name: 'description',
      content: "Shreve's Tax Service Site Map"
    }
  ]
});
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Site Map',
    icon: 'i-heroicons-map',
    to: '/sitemap'
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
