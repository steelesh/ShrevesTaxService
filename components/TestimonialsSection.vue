<template>
  <ULandingSection
    headline="Testimonials"
    title="What Our Clients Are Saying"
    description="Our customers are our best advocates. Read what they have to say about our work."
    id="testimonials"
    class="section"
    v-motion-fade
    :delay="100"
  >
    <ULandingGrid>
      <ULandingTestimonial
        class="col-span-6 row-span-2"
        quote="Wendy, thank you for 20 years of service preparing my taxes. I really appreciate you and the excellent quality of your work. I've had the peace of mind through the years that I've never had to fear the IRS from filing incorrectly. The dedication you exhibit both honestly with the IRS and your customers emphasizes what a wonderful businesswoman you are. Thank you for being my friend and trusted advocate for the IRS."
        :author="{
          name: 'Dora Maxwell',
          target: '_blank'
          // avatar: { src: 'https://i.pravatar.cc/120?img=1' }
        }"
        card
      />
      <ULandingTestimonial
        class="col-span-6 row-span-4"
        quote="I gladly recommend Wendy's services. She has a very clean, friendly atmosphere. She puts all she has into her work, she's affordable and always completes in a timely manner. I look forward to see her each year!"
        :author="{
          name: 'Jessica Swope',
          target: '_blank'
          // avatar: { src: 'https://i.pravatar.cc/120?img=1' }
        }"
        card
      />
    </ULandingGrid>
  </ULandingSection>
</template>
