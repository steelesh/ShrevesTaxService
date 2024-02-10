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
          quote="Testimonial number 1"
          :author="{
            name: 'Jane Doe',
            description: 'CEO',
            to: 'https://google.com',
            target: '_blank',
            avatar: { src: 'https://i.pravatar.cc/120?img=1' }
          }"
          card
        />
        <ULandingTestimonial
          class="col-span-6 row-span-4"
          quote="Testimonial number 2"
          :author="{
            name: 'Jane Doe',
            description: 'CEO',
            to: 'https://google.com',
            target: '_blank',
            avatar: { src: 'https://i.pravatar.cc/120?img=1' }
          }"
          card
        />
        <ULandingTestimonial
          class="col-span-6 row-span-4"
          quote="Testimonial number 3"
          :author="{
            name: 'Jane Doe',
            description: 'CEO',
            to: 'https://google.com',
            target: '_blank',
            avatar: { src: 'https://i.pravatar.cc/120?img=1' }
          }"
          card
        />
        <ULandingTestimonial
          class="col-span-6 row-span-2"
          quote="Testimonial number 4"
          :author="{
            name: 'Jane Doe',
            description: 'CEO',
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
