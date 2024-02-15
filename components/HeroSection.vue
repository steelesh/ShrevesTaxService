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
            Shreve's Tax Service stands as the trusted tax preparation office in
            Zanesville, <br />serving the community for over 20 years.
            <br />
          </span>
        </div>
      </template>
      <template #headline>
        <UButton
          color="gray"
          label="Located in Zanesville, OH"
          icon="i-heroicons-map-pin"
          size="xs"
          class="cursor-default rounded-full"
          aria-label="Location"
        />
      </template>
      <!-- BUTTONS -->
      <template #links>
        <UButton
          to="#services"
          size="xl"
          :variant="isLight ? 'solid' : 'outline'"
          padded
          aria-label="Learn More"
        >
          Learn More
        </UButton>
      </template>
    </ULandingHero>
  </ClientOnly>
</template>
