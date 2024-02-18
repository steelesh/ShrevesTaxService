<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Contact Us",
  meta: [
    {
      name: 'description',
      content: "Shreve's Tax Service Contact Information"
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
      ><template #description>
        <p class="mb-4 text-sm">
          <i>
            To ensure personalized service, appointments are required for all
            consultations and meetings.
          </i>
        </p>
        <p>
          Whether you have questions, need assistance, or want to schedule a
          consultation, we're here to help!
        </p>
      </template></UPageHeader
    >
    <div class="mt-8">
      <h2
        class="my-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white"
      >
        Contact Information
      </h2>
      <div class="flex flex-col gap-3">
        <NuxtLink
          to="mailto:wendy@shrevestaxservice.com"
          class="flex items-center gap-2 underline"
        >
          <Icon name="i-heroicons-envelope-solid" />
          <span>wendy@shrevestaxservice.com</span>
        </NuxtLink>
        <NuxtLink
          to="tel:+17404507107"
          class="flex items-center gap-2 underline"
        >
          <Icon name="i-heroicons-phone-solid" />
          <span>+1 (740) 450-7107</span>
        </NuxtLink>
        <NuxtLink
          to="http://maps.apple.com/?q=2680+Ridge+Road,+Zanesville,+OH,43701"
          class="flex items-center gap-2 underline"
        >
          <Icon name="i-heroicons-map-pin-solid" />
          <span>2680 Ridge Road, Zanesville OH 43701</span>
        </NuxtLink>
      </div>
    </div>
    <UPageBody>
      <ContactSection />
    </UPageBody>
  </UPage>
</template>
