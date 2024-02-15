<script setup>
import { useSessionStorage } from '@vueuse/core';

const showNotification = useSessionStorage(
  'showNotification',
  true,
  useSessionStorage
);

const dismiss = () => {
  showNotification.value = false;
};
</script>

<template>
  <ClientOnly>
    <div
      v-if="showNotification"
      class="flex items-center gap-x-6 bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1 dark:bg-[rgb(45,212,191)]"
    >
      <p class="text-xs leading-6 text-white md:text-sm dark:text-black">
        <a href="/contact">
          <strong class="font-semibold">2023 Tax Deadline is April 15</strong
          ><svg
            viewBox="0 0 2 2"
            class="mx-1 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" /></svg
          >File with us today!
        </a>
      </p>
      <div class="flex flex-1 justify-end">
        <UButton
          @click="dismiss"
          class="-m-3 pb-3 pl-2 pr-2 pt-3 focus-visible:outline-offset-[-4px]"
          icon="i-heroicons-x-mark"
          aria-label="Dismiss banner notice"
        >
        </UButton>
      </div>
    </div>
  </ClientOnly>
</template>
