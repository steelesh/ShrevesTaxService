<template>
  <ULandingSection
    id="services"
    class="section"
    v-motion-fade-visible
    :delay="100"
  >
    <template #title>
      <span class="text-primary">Services</span>
      We Offer</template
    >
    <UPageGrid>
      <UPageCard
        icon="i-heroicons-wrench-screwdriver"
        title="Service 1"
        description="Description of service 1"
      />
      <UPageCard
        icon="i-heroicons-square-3-stack-3d"
        title="Service 2"
        description="Description of service 2"
      />
      <UPageCard
        icon="i-heroicons-device-phone-mobile"
        title="Service 3"
        description="Description of service 3"
      />
    </UPageGrid>
  </ULandingSection>
</template>
