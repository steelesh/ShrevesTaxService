<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <SpeedInsights />
  <CustomHeader />
  <UMain>
    <NuxtPage />
  </UMain>
  <CustomFooter />
</template>
