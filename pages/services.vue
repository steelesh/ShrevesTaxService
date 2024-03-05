<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Our Services",
  meta: [
    {
      name: 'description',
      content:
        "Offering tax solutions in Zanesville, OH, Shreve's Tax Service specializes in tax preparation, planning, and compliance for individuals and businesses. With expert guidance, we navigate complex tax situations to maximize your savings and ensure compliance. Trust us for your tax needs."
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
    label: 'Services',
    icon: 'i-heroicons-wrench-screwdriver',
    to: '/services'
  }
];
</script>

<template>
  <UPage>
    <UBreadcrumb :links="links" class="mt-8" />
    <UPageHeader
      title="Services"
      description="We are here to help you with your tax preparation, tax planning, and tax compliance needs."
    />
    <UPageBody prose>
      <ContentDoc />
    </UPageBody>
  </UPage>
</template>
