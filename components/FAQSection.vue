<script setup lang="ts">
const items = [
  {
    label: 'Question #1',
    content: 'Answer to question #1'
  },
  {
    label: 'Question #2',
    content: 'Answer to question #2'
  },
  {
    label: 'Question #3',
    content: 'Answer to question #3'
  },
  {
    label: 'Question #4',
    content: 'Answer to question #4'
  }
];
</script>

<template>
  <ULandingSection id="faq" class="section" v-motion-fade :delay="100">
    <template #title>
      Frequently Asked
      <span class="text-primary">Questions</span>
    </template>
    <ULandingFAQ
      class="relative divide-y divide-gray-200 rounded-lg bg-gray-50 px-8 shadow ring-1 ring-gray-200 dark:divide-gray-800 dark:bg-gray-900 dark:ring-gray-800"
      :items="items"
      multiple
    />
  </ULandingSection>
</template>
