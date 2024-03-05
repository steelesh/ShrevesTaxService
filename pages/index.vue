<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service - Home",
  meta: [
    {
      name: 'description',
      content:
        'Tax preparation office in Zanesville OH. that offers professional tax preparation and consulting services to help you maximize your returns.'
    },
    {
      name: 'keywords',
      content:
        'professional tax services, tax service, tax preparation, IRS, E-File Provider, Zanesville, Wendy Shreve, tax preparation Zanesville, tax planning, tax compliance, individual tax services, business tax services, tax expert, maximize tax savings, tax consultant, IRS regulations, E-File services'
    },
    { name: 'author', content: "Shreve's Tax Service" }
  ]
});
definePageMeta({
  layout: 'home'
});
</script>

<template>
  <HeroSection />
  <ServicesSection />
  <TestimonialsSection />
  <FAQSection />
</template>
