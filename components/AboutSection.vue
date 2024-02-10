<template>
  <div class="snap-section">
    <ULandingSection
      id="about"
      align="left"
      description="Wendy Shreve is an authorized E-File Provider and a dedicated
        participant in the IRS Annual Filing Season Program. Wendy commits to
        high standards of accuracy and compliance, while ensuring each client
        receives friendly, professional service."
      :links="[
        {
          label: 'View Services',
          color: 'primary',
          size: 'lg',
          to: '#services',
          icon: 'i-heroicons-folder-open'
        },
        {
          label: 'Contact',
          color: 'gray',
          size: 'lg',
          icon: 'i-heroicons-arrow-long-right',
          trailing: true,
          to: '#contact'
        }
      ]"
    >
      <template #title> About <span class="text-primary">Us</span> </template>
      <img
        src="https://picsum.photos/640/360"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </ULandingSection>
  </div>
</template>
