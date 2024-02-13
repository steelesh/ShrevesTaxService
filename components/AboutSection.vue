<template>
  <ULandingSection
    id="about"
    class="section"
    v-motion-fade
    :delay="100"
    align="left"
    description="Wendy Shreve is an authorized E-File Provider and a dedicated
        participant in the IRS Annual Filing Season Program. Wendy commits to
        high standards of accuracy and compliance, while ensuring each client
        receives friendly, professional service."
    :links="[
      {
        label: 'Read More',
        color: 'gray',
        size: 'lg',
        icon: 'i-heroicons-arrow-long-right',
        trailing: true,
        to: '/about'
      }
    ]"
  >
    <template #title> About <span class="text-primary">Us</span> </template>
    <NuxtImg
      src="https://picsum.photos/640/360"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>
</template>
