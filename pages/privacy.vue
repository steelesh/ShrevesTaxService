<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Privacy Policy"
});
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
    <UBreadcrumb class="mt-8" :links="links" :ui="{ ol: 'pl-0' }" />
    <UPageHeader title="PRIVACY POLICY">
      <template #description>
        <p class="mb-4 text-sm"><i>Last updated February 14, 2024</i></p>
        <p>
          Please read this privacy policy carefully before using our website.
        </p>
      </template>
    </UPageHeader>
    <UPageBody prose>
      <article>
        <ContentDoc />
      </article>
    </UPageBody>
  </UPage>
</template>
