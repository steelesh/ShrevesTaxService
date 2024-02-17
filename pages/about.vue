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
      description="Wendy Shreve is an authorized E-File Provider and a dedicated
        participant in the IRS Annual Filing Season Program. Wendy commits to
        high standards of accuracy and compliance, while ensuring each client
        receives friendly, professional service."
    />
    <UPageBody> </UPageBody>
  </UPage>
</template>
