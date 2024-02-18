<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Services",
  meta: [
    {
      name: 'description',
      content: "Shreve's Tax Service Services We Provide"
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
    label: 'Services',
    icon: 'i-heroicons-wrench-screwdriver',
    to: '/services'
  }
];
</script>

<template>
  <UPage>
    <UBreadcrumb :links="links" class="mt-8" />
    <UPageHeader
      title="Services"
      description="We are here to help you with your tax preparation, tax planning, and tax compliance needs."
    />
    <UPageBody prose>
      <ContentDoc />
    </UPageBody>
  </UPage>
</template>
