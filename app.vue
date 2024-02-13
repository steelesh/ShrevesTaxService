<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <SpeedInsights />
  <NuxtLayout>
    <CustomHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <CustomFooter />
  </NuxtLayout>
</template>
