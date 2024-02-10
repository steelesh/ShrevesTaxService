<template>
  <div class="snap-section">
    <ULandingSection id="testimonials">
      <template #title>
        <span
          >What <span class="text-primary">Our Clients</span> Are Saying</span
        >
      </template>
      <ULandingGrid>
        <ULandingTestimonial
          class="col-span-6 row-span-2"
          icon="i-simple-icons-google"
          quote="Wendy is awesome at her job. She is very knowledgeable and professional. I would recommend her to anyone."
          :author="{
            name: 'Rose Roberson',
            description: 'CEO at Google',
            to: 'https://google.com',
            target: '_blank',
            avatar: { src: 'https://i.pravatar.cc/120?img=1' }
          }"
          card
        />
        <ULandingTestimonial
          class="col-span-6 row-span-4"
          icon="i-simple-icons-google"
          quote="Wendy is awesome at her job. She is very knowledgeable and professional. I would recommend her to anyone."
          :author="{
            name: 'Rose Roberson',
            description: 'CEO at Google',
            to: 'https://google.com',
            target: '_blank',
            avatar: { src: 'https://i.pravatar.cc/120?img=1' }
          }"
          card
        />
        <ULandingTestimonial
          class="col-span-6 row-span-4"
          icon="i-simple-icons-google"
          quote="Wendy is awesome at her job. She is very knowledgeable and professional. I would recommend her to anyone."
          :author="{
            name: 'Rose Roberson',
            description: 'CEO at Google',
            to: 'https://google.com',
            target: '_blank',
            avatar: { src: 'https://i.pravatar.cc/120?img=1' }
          }"
          card
        />
        <ULandingTestimonial
          class="col-span-6 row-span-2"
          icon="i-simple-icons-google"
          quote="Wendy is awesome at her job. She is very knowledgeable and professional. I would recommend her to anyone."
          :author="{
            name: 'Rose Roberson',
            description: 'CEO at Google',
            to: 'https://google.com',
            target: '_blank',
            avatar: { src: 'https://i.pravatar.cc/120?img=1' }
          }"
          card
        />
      </ULandingGrid>
    </ULandingSection>
  </div>
</template>
