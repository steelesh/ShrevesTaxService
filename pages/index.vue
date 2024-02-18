<script setup lang="ts">
useHead({
  title: "Shreve's Tax Service",
  meta: [
    {
      name: 'description',
      content: "Shreve's Tax Service"
    }
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
