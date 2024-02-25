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
const navigation = {
  quicklinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ],
  services: [
    { name: 'Tax Preparation', href: '/services#tax-preparation' },
    { name: 'Tax Planning', href: '/services#tax-planning' },
    { name: 'Tax Compliance', href: '/services#tax-compliance' }
  ],
  legal: [
    { name: 'Terms and Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Accessibility', href: '/accessibility' }
  ],
  resources: [
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' }
  ],
  social: [
    {
      name: 'Email',
      href: 'mailto:wendy@shrevestaxservice.com',
      icon: 'i-heroicons-envelope-solid'
    },
    {
      name: 'Call',
      href: 'tel:+17404507107',
      icon: 'i-heroicons-phone-solid'
    }
  ]
};
</script>

<template>
  <footer
    v-motion-fade
    :delay="100"
    class="bg-gray-100 dark:bg-gray-800"
    aria-labelledby="footer-heading"
  >
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <ClientOnly>
            <NuxtImg
              class="h-14"
              :src="
                isLight
                  ? '/images/logo/v3/inter/png/v3-logo-black-inter.png'
                  : '/images/logo/v3/inter/png/v3-logo-white-inter.png'
              "
              alt="Shreve's Tax Service LLC. Logo"
            />
          </ClientOnly>
          <p class="text-sm leading-6">
            <i
              >A full-service tax preparation office located in<br />
              <b>Zanesville, Ohio</b>.</i
            >
          </p>
          <div class="flex flex-col gap-3">
            <NuxtLink
              to="mailto:wendy@shrevestaxservice.com"
              class="flex items-center gap-2 underline"
            >
              <Icon name="i-heroicons-envelope-solid" />
              <span class="text-sm">wendy@shrevestaxservice.com</span>
            </NuxtLink>
            <NuxtLink
              to="tel:+17404507107"
              class="flex items-center gap-2 underline"
            >
              <Icon name="i-heroicons-phone-solid" />
              <span class="text-sm">+1 (740) 450-7107</span>
            </NuxtLink>
            <NuxtLink
              to="http://maps.apple.com/?q=2680+Ridge+Road,+Zanesville,+OH,43701"
              class="flex items-center gap-2 underline"
            >
              <Icon name="i-heroicons-map-pin-solid" />
              <span class="text-sm">2680 Ridge Road, Zanesville OH 43701</span>
            </NuxtLink>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-base font-semibold leading-6 text-black dark:text-white"
              >
                Resources
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.resources" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6">{{
                    item.name
                  }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <div>
                <h3
                  class="text-base font-semibold leading-6 text-black dark:text-white"
                >
                  Services
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.services" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6">{{
                      item.name
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-base font-semibold leading-6 text-black dark:text-white"
              >
                Legal
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6">{{
                    item.name
                  }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <div>
                <h3
                  class="text-base font-semibold leading-6 text-black dark:text-white"
                >
                  Quick Links
                </h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.quicklinks" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6">{{
                      item.name
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5">
          &copy; 2024 Shreve's Tax Service LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
