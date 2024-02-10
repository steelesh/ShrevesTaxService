<script setup>
useHead({
  title: "Shreve's Tax Service",
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en-US'
  }
});

useSeoMeta({
  description: "Shreve's Tax Service is a tax service in Zanesville, OH."
});
</script>

<template>
  <CustomHeader />
  <SquarePattern />
  <GradientPattern />
  <UMain>
    <NuxtPage />
  </UMain>
  <CustomFooter />
</template>
