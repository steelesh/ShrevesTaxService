<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Contact Us"
});
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Contact',
    icon: 'i-heroicons-chat-bubble-oval-left',
    to: '/contact'
  }
];
</script>

<template>
  <UPage>
    <UBreadcrumb :links="links" class="mt-8" />
    <UPageHeader
      title="Contact Us"
      description="Whether you have questions, need assistance, or want to schedule a consultation, we're here to help!"
    />
    <UPageBody>
      <ContactSection />
    </UPageBody>
  </UPage>
</template>
