<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - About Us",
  meta: [
    {
      name: 'description',
      content:
        "Learn about Shreve's Tax Service and our background. We've proudly served the Zanesville community since 2001."
    },
    {
      name: 'keywords',
      content:
        'professional tax services, tax service, tax preparation, IRS, E-File Provider, Zanesville, Wendy Shreve, tax preparation Zanesville, tax planning, tax compliance, individual tax services, business tax services, tax expert, maximize tax savings, tax consultant, IRS regulations, E-File services'
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
    label: 'About Us',
    icon: 'i-heroicons-user-group',
    to: '/about'
  }
];
</script>

<template>
  <UPage>
    <UBreadcrumb :links="links" class="mt-8" />
    <UPageHeader
      title="About Us"
      description="Get to know us and our background at Shreve's Tax Service."
    />
    <UPageBody
      class="flex flex-col-reverse justify-between gap-10 lg:flex-row lg:gap-0"
    >
      <div class="flex flex-col gap-[20px] lg:w-[45%]">
        <h2
          class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white"
        >
          Our Story
        </h2>
        <p>
          Shreve's Tax Service, a trusted family-owned business, has proudly
          served the Zanesville community since 2001. Committed to excellence,
          we specialize in providing top-tier tax preparation services tailored
          to our clients' needs.
        </p>
        <p>
          Led by Wendy Shreve, an authorized E-File Provider and dedicated
          participant in the IRS Annual Filing Season Program, we uphold
          standards of accuracy and compliance. Our personalized approach
          ensures each client receives professional and friendly service,
          guaranteed.
        </p>
        <p>
          Wendy holds a Bachelor of Arts in Business Economics from Muskingum
          College (1997). In addition to her role at Shreve's Tax Service, she
          serves as the Fiscal Officer of Springfield Township and teaches 2nd
          grade at Maysville Elementary School.
        </p>
      </div>

      <div class="w-[80%] self-center lg:w-[45%]">
        <NuxtImg
          src="/images/bg/tax-form-bg.jpg"
          alt="Wendy Shreve"
          class="rounded-lg"
        />
      </div>
    </UPageBody>
  </UPage>
</template>
