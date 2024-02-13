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
        <button
          type="button"
          @click="dismiss"
          class="-m-3 pb-3 pl-2 pr-2 pt-3 focus-visible:outline-offset-[-4px]"
        >
          <span class="sr-only">Dismiss</span>
          <Icon
            name="i-heroicons-x-mark"
            class="h-3 w-3 text-white md:h-5 md:w-5 dark:text-black"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </ClientOnly>
</template>
