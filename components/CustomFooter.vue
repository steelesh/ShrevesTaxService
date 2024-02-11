<template>
  <div class="snap-section" v-motion-fade-visible :delay="200">
    <ULandingSection>
      <ULandingCTA
        title="Footer Section"
        description="Enter Footer Stuff"
        id="contact"
      >
        <template #links>
          <!-- <UButton
            to="https://ui.nuxt.com/pro/purchase"
            target="_blank"
            size="lg"
            color="black"
            icon="i-heroicons-credit-card"
          >
            Buy now
          </UButton>
          <UButton
            to="https://ui.nuxt.com/pro/guide#license"
            target="_blank"
            size="lg"
            color="gray"
            trailing-icon="i-heroicons-arrow-right-20-solid"
          >
            License
          </UButton> -->
        </template>
      </ULandingCTA>
      <!-- <UFooter>
        <template #left> Copyright © {{ new Date().getFullYear() }} </template>
      </UFooter> -->
    </ULandingSection>
  </div>
</template>
