<template>
  <ULandingSection
    headline="Services"
    title="What We Can Do For You"
    id="services"
    class="section"
    v-motion-fade
    :delay="100"
  >
    <template #description>
      <span
        >Our services are designed to meet the needs of individuals and small
        businesses, providing guidance and support for tax preparation,
        planning, and compliance. Wendy ensures that each client receives
        personalized attention and thorough assistance.</span
      >
      <br />
      <br />
      <span
        >Read more about each of our
        <NuxtLink class="text-primary" to="/services">services</NuxtLink></span
      >
    </template>
    <ULandingGrid>
      <ULandingCard
        class="col-span-4 row-span-2"
        icon="i-heroicons-folder"
        title="Tax Preparation"
        description="Our tax preparation service ensures accurate and timely filing of individual and small business tax returns, guiding you through the process with expertise and attention to detail."
      ></ULandingCard>
      <ULandingCard
        class="col-span-4 row-span-2"
        icon="i-heroicons-calculator"
        title="Tax Planning"
        description="Our tax planning service helps you minimize tax liability and maximize deductions through strategic planning tailored to your financial situation and goals."
      ></ULandingCard>
      <ULandingCard
        class="col-span-4 row-span-2"
        icon="i-heroicons-shield-check"
        title="Tax Compliance"
        description="We keep you informed and compliant with changing tax laws and regulations, ensuring you meet filing requirements and deadlines without stress or penalties."
      ></ULandingCard>
    </ULandingGrid>
  </ULandingSection>
</template>
