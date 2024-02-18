<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Accessibility Statement"
});
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
    <UBreadcrumb class="mt-8" :links="links" :ui="{ ol: 'pl-0' }" />
    <UPageHeader title="ACCESSIBILITY STATEMENT">
      <template #description>
        <p class="mb-4 text-sm"><i>Last updated February 14, 2024</i></p>
        <p>
          This statement was created using the W3C Accessibility Statement
          Generator Tool.
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
