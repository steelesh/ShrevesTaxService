<script setup>
import VueTypewriterEffect from 'vue-typewriter-effect';

const colorMode = useColorMode();
const isLight = computed({
  get() {
    return colorMode.value === 'light';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>

<template>
  <ClientOnly>
    <ULandingHero
      :ui="{ title: 'text-4xl' }"
      class="section"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
    >
      <!-- TITLE -->
      <template #title>
        <h1>Expert Tax Services</h1>
        <vue-typewriter-effect
          class="text-primary text-[20px] sm:text-[32px] md:text-[44px]"
          :strings="[
            'At Reasonable Rates',
            'With a Personal Touch',
            'Delivering Exceptional Results'
          ]"
          :cursor="'|'"
          :loop="true"
          :pauseFor="1650"
          :deleteSpeed="18"
        />
      </template>
      <!-- DESCRIPTION -->
      <template #description>
        <div class="my-20">
          <span>
            Since 2002, tax professional
            <span class="text-black dark:text-white">Wendy Shreve</span> has
            been servicing clients in <br /><b>Zanesville, OH</b>.
          </span>
        </div>
      </template>
      <!-- BUTTONS -->
      <template #links>
        <UButton
          to="#about"
          size="xl"
          :variant="isLight ? 'solid' : 'outline'"
          padded
        >
          Learn More
        </UButton>
      </template>
    </ULandingHero>
  </ClientOnly>
</template>
