<script setup lang="ts">
import { h } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast';

const schema = z.object({
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(2, {
      message: 'Name must be at least 2 characters.',
    }),
  username: z
    .string({
      required_error: 'User Name is required.',
    })
    .min(2, {
      message: 'User Name must be at least 2 characters.',
    }),
})

function onSubmit(values: Record<string, any>) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <Card>
    <CardContent class="tw-p-0">
      <AutoForm class="w-2/3 space-y-6" :schema :field-config="{
        username: {
          inputProps: {
            disabled: true,
          },
        },
      }" @submit="onSubmit">
        <Button type="submit">
          Submit
        </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
