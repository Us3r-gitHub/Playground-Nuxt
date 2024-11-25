<script setup lang="ts">
import { h } from 'vue'
import * as z from 'zod'
import { DependencyType } from '~/components/ui/auto-form/interface'
import { toast } from '~/components/ui/toast';

const schema = z.object({
  firstName: z.string({ description: "First Name", required_error: "required field" }),
  lastName: z.string({ description: "Last Name", required_error: "required field" }),
  fullName: z.string({ description: "Full Name", required_error: "required field" }),
  userName: z.string({ description: "User Name", required_error: "required field" }).optional(),
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
        firstName: {
          description: 'Required condition disabled by dependency configuration',
        },
        lastName: {
          description: 'Required condition disabled using component slot',
        },
        fullName: {
          description: 'Required condition disabled using `inputProps` option in field config',
          inputProps: {
            required: false,
          },
        },
        userName: {
          description: 'Required condition disabled using zod schema',
        },
      }" :dependencies="[
        {
          sourceField: 'firstName',
          targetField: 'firstName',
          type: DependencyType.REQUIRES,
          when: () => false
        }
      ]" @submit="onSubmit">
        <template #lastName="slotProps">
          <AutoFormFieldInput v-bind="slotProps" :required="false" />
        </template>
        <Button type="submit">
          Submit
        </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
