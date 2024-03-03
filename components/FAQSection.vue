<script setup lang="ts">
const items = [
  {
    label: 'What do I need to bring for my tax preparation appointment?',
    content:
      'Please bring all relevant financial documents, including W-2s, 1099s, records of expenses, investment income statements, and any other documents related to income or deductions.'
  },
  {
    label: 'How long does the tax preparation process take?',
    content:
      'It varies depending on your financial situation. After our initial consultation, we will provide you with an estimated timeline.'
  },
  {
    label: 'Can you help with tax filings from previous years?',
    content:
      'Yes, we can assist with filing back taxes and will work with you to gather necessary documentation and submit past year returns.'
  }
];
</script>

<template>
  <ULandingSection
    description="Have a question? We have answers. If you can't find what you're looking for, please don't hesitate to contact us."
    id="faq"
    class="section"
    v-motion-fade
    :delay="100"
  >
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
