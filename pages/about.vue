<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - About Us"
});
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'About Us',
    icon: 'i-heroicons-user-group',
    to: '/about'
  }
];
</script>

<template>
  <UPage>
    <UBreadcrumb :links="links" class="mt-8" />
    <UPageHeader
      title="About Us"
      description="Get to know us and our background at Shreve's Tax Service."
    />
    <UPageBody> </UPageBody>
  </UPage>
</template>
