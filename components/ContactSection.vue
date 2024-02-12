<script setup lang="ts">
import { z } from 'zod';
import { reactive } from 'vue';
import type { FormSubmitEvent } from '#ui/types';

const schema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be no longer than 50 characters'),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be no longer than 50 characters'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email'),
  message: z
    .string({ required_error: 'Message is required' })
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be no longer than 500 characters'),
  acceptprivacypolicy: z
    .boolean({ required_error: 'This must be selected to send a message' })
    .refine((value) => value, {
      message: 'This must be selected to send a message'
    })
});

type Schema = z.infer<typeof schema>;

const state = reactive({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  message: undefined,
  acceptprivacypolicy: undefined
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with form data
  console.log(event.data);
}

const clearForm = () => {
  state.firstName = undefined;
  state.lastName = undefined;
  state.email = undefined;
  state.message = undefined;
  state.acceptprivacypolicy = undefined;
};
</script>

<template>
  <div class="snap-section" v-motion-fade-visible :delay="200">
    <ULandingSection>
      <UForm
        :schema="schema"
        :state="state"
        :validate-on="['submit']"
        @submit="onSubmit"
        class="relative space-y-4 divide-gray-200 rounded-xl border-2 bg-gray-50 p-20 shadow ring-1 ring-gray-200 dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:ring-gray-500"
      >
        <h2
          class="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900 sm:mb-24 sm:text-4xl lg:text-5xl dark:text-white"
        >
          Contact <span class="text-primary">Us</span>
        </h2>
        <div
          class="flex flex-col justify-between gap-0 space-y-8 sm:flex-row sm:gap-24 sm:space-y-0"
        >
          <UFormGroup
            class="w-full sm:w-1/2"
            required
            label="First Name"
            name="firstName"
          >
            <UInput size="lg" v-model="state.firstName" />
          </UFormGroup>
          <UFormGroup
            class="w-full sm:w-1/2"
            required
            label="Last Name"
            name="lastName"
          >
            <UInput size="lg" v-model="state.lastName" />
          </UFormGroup>
        </div>
        <UFormGroup required label="Email" name="email">
          <UInput size="lg" v-model="state.email" />
        </UFormGroup>
        <UFormGroup required label="Message" name="message">
          <UTextarea
            autoresize
            size="xl"
            :rows="5"
            placeholder="Write your message..."
            v-model="state.message"
          />
        </UFormGroup>
        <UFormGroup name="acceptprivacypolicy">
          <div class="flex items-center gap-4">
            <UToggle
              size="md"
              on-icon="i-heroicons-check-20-solid"
              off-icon="i-heroicons-x-mark-20-solid"
              v-model="state.acceptprivacypolicy"
            />
            <span
              >By selecting this, you agree to our
              <NuxtLink to="#" class="text-primary">privacy policy</NuxtLink>.
            </span>
          </div>
        </UFormGroup>
        <UButton size="lg" type="submit">Submit</UButton>
        <UButton size="lg" variant="outline" class="ml-2" @click="clearForm"
          >Clear</UButton
        >
      </UForm>
    </ULandingSection>
  </div>
</template>
