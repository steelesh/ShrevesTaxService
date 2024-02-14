<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <SpeedInsights />
  <BannerNotice />
  <NuxtLayout>
    <UMain>
      <NuxtPage />
    </UMain>
  </NuxtLayout>
</template>
