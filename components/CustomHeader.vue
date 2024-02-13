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
    label: 'Services',
    to: '/services'
  },
  {
    label: 'About',
    to: '/about'
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
    <template #right>
      <div class="flex items-center gap-4">
        <UButton
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
