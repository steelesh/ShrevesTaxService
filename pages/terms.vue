<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Terms and Conditions"
});
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Terms and Conditions',
    icon: 'i-heroicons-document-text',
    to: '/terms'
  }
];
</script>

<template>
  <UPage>
    <UBreadcrumb class="mt-8" :links="links" :ui="{ ol: 'pl-0' }" />
    <UPageHeader title="TERMS AND CONDITIONS">
      <template #description>
        <p class="mb-4 text-sm"><i>Last updated February 14, 2024</i></p>
        <p>
          Please read these terms and conditions carefully before using our
          website.
        </p>
      </template>
    </UPageHeader>
    <UPageBody prose>
      <ContentDoc />
    </UPageBody>
  </UPage>
</template>
