<template>
  <ULandingSection
    headline="Services"
    title="What We Can Do For You"
    description="Our services are designed to meet the needs of individuals and small businesses, providing guidance and support for tax preparation, planning, and compliance. Wendy ensures that each client receives personalized attention and thorough assistance."
    id="services"
    class="section"
    v-motion-fade
    :delay="100"
  >
    <ULandingGrid>
      <ULandingCard
        class="col-span-4 row-span-2"
        icon="i-heroicons-folder"
        title="Tax Preparation"
        description="Our tax preparation service ensures accurate and timely filing of individual and small business tax returns, guiding you through the process with expertise and attention to detail."
        ><UButton
          class="w-32"
          to="/services#tax-preparation"
          :trailing="true"
          icon="i-heroicons-arrow-long-right"
          aria-label="Learn more about our tax preparation service"
          >Learn More</UButton
        ></ULandingCard
      >
      <ULandingCard
        class="col-span-4 row-span-2"
        icon="i-heroicons-calculator"
        title="Tax Planning"
        description="Our tax planning service helps you minimize tax liability and maximize deductions through strategic planning tailored to your financial situation and goals."
        ><UButton
          class="w-32"
          to="/services#tax-planning"
          :trailing="true"
          icon="i-heroicons-arrow-long-right"
          aria-label="Learn more about our tax planning service"
          >Learn More</UButton
        ></ULandingCard
      >
      <ULandingCard
        class="col-span-4 row-span-2"
        icon="i-heroicons-shield-check"
        title="Tax Compliance"
        description="We keep you informed and compliant with changing tax laws and regulations, ensuring you meet filing requirements and deadlines without stress or penalties."
        ><UButton
          class="w-32"
          to="/services#tax-compliance"
          :trailing="true"
          icon="i-heroicons-arrow-long-right"
          aria-label="Learn more about our tax compliance service"
          >Learn More</UButton
        ></ULandingCard
      >
    </ULandingGrid>
  </ULandingSection>
</template>
