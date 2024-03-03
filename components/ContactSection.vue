<script setup lang="ts">
import { z } from 'zod';
import { reactive } from 'vue';
import type { FormSubmitEvent } from '#ui/types';

const isModalOpen = ref(false);
const modalTitle = ref('');
const modalMessage = ref('');
const isSubmitting = ref(false);

const schema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be no longer than 50 characters'),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be no longer than 50 characters'),
  subject: z
    .string({ required_error: 'Subject is required' })
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be no longer than 100 characters'),
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
  subject: undefined,
  message: undefined,
  acceptprivacypolicy: undefined
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true;
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event.data)
    });
    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    modalTitle.value = `Thank You, ${state.firstName} ${state.lastName}! Your Message Has Been Received.`;
    modalMessage.value = `We've successfully received your message and appreciate you taking the time to write.`;
  } catch (error) {
    modalTitle.value = `Oops, Something Went Wrong!`;
    modalMessage.value = `${state.firstName} - Unfortunately, we encountered an issue processing your message. Please try submitting again later, or if the problem persists, feel free to contact us directly via email at wendy@shrevestaxservice.com or by phone at (740) 450-7107 . We're here to help!`;
  } finally {
    isSubmitting.value = false;
    isModalOpen.value = true;
    clearForm();
  }
}

const clearForm = () => {
  state.firstName = undefined;
  state.lastName = undefined;
  state.subject = undefined;
  state.message = undefined;
  state.acceptprivacypolicy = undefined;
};
</script>

<template>
  <h2
    class="my-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white"
  >
    Send a Message
  </h2>
  <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-4">
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
    <UFormGroup required label="Subject" name="subject">
      <UInput size="lg" v-model="state.subject" />
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
        <span class="my-4 text-sm md:text-base"
          >By selecting this, you agree to our
          <NuxtLink to="#" class="text-primary">privacy policy</NuxtLink>.
        </span>
      </div>
    </UFormGroup>
    <UButton
      :ui="{
        icon: {
          size: 'sm'
        }
      }"
      size="lg"
      type="submit"
      :loading="isSubmitting"
      >Submit</UButton
    >
    <UButton size="lg" variant="outline" class="ml-2" @click="clearForm"
      >Clear</UButton
    >
  </UForm>
  <UModal class="prose" v-model="isModalOpen">
    <UCard>
      <h3>
        {{ modalTitle }}
      </h3>
      <p>{{ modalMessage }}</p>
      <div>
        <UButton size="lg" @click="isModalOpen = false">Close</UButton>
      </div>
    </UCard>
  </UModal>
</template>
