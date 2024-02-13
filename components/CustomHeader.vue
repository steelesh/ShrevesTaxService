<script setup>
const colorMode = useColorMode();
const isLight = computed({
  get() {
    return colorMode.value === 'light';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});

const links = [
  {
    label: 'About',
    to: '/about',
    exactHash: true
  },
  {
    label: 'Services',
    to: '/services',
    exactHash: true
  },
  {
    label: 'Contact',
    to: '/contact',
    exactHash: true
  }
];
</script>

<template>
  <UHeader
    :links="links"
    :ui="{
      button: {
        base: 'text-lg lg:hidden'
      }
    }"
  >
    <!-- LEFT -->
    <template #left>
      <NuxtLink to="/" class="hidden items-center gap-2 md:flex">
        <NuxtImg
          class="h-12"
          src="/images/logo/misc/png/plant-group-no-bottom.png"
        />
        <span class="font-bold">Shreve's Tax Service</span>
      </NuxtLink>
      <NuxtLink to="/" class="block md:hidden">
        <NuxtImg
          class="h-14"
          :src="
            isLight
              ? '/images/logo/v1/inter/png/v1-logo-black-inter.png'
              : '/images/logo/v1/inter/png/v1-logo-white-inter.png'
          "
        />
      </NuxtLink>
    </template>
    <!-- CENTER -->
    <template #center>
      <div class="hidden"></div>
    </template>
    <!-- RIGHT -->
    <template #right>
      <div class="flex items-center gap-4">
        <UButton
          class="hidden lg:flex"
          to="/contact"
          size="md"
          :variant="isLight ? 'solid' : 'outline'"
          >Contact</UButton
        >
        <UColorModeButton size="lg" class="flex lg:hidden" />
        <UColorModeToggle size="lg" class="hidden lg:flex" />
      </div>
    </template>
    <!-- PANEL -->
    <template #panel>
      <UAsideLinks
        :links="links"
        :ui="{ label: 'text-3xl', wrapper: 'mt-12 space-y-6' }"
      />
    </template>
  </UHeader>
</template>
