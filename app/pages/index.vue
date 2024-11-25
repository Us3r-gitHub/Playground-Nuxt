<script setup lang="ts">
import { h } from 'vue'
import * as z from 'zod'
import { DependencyType } from '~/components/ui/auto-form/interface'
import { toast } from '~/components/ui/toast';

const schema = z.object({
  firstName: z.string({ description: "First Name" }).default("first name"),
  lastName: z.string({ description: "Last Name" }).default("last name"),
  fullName: z.string({ description: "Full Name" }).default("full name"),
  userName: z.string({ description: "User Name" }).default("user name"),
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
          description: 'Disabled by dependency configuration',
        },
        lastName: {
          description: 'Disabled using component slot',
        },
        fullName: {
          description: 'Disabling using inputProps option in field config',
          inputProps: {
            disabled: true,
          },
        },
        userName: {
          description: 'Not Disabled',
        },
      }" :dependencies="[
        {
          sourceField: 'firstName',
          targetField: 'firstName',
          type: DependencyType.DISABLES,
          when: () => true
        }
      ]" @submit="onSubmit">
        <template #lastName="slotProps">
          <AutoFormFieldInput v-bind="slotProps" disabled />
        </template>
        <Button type="submit">
          Submit
        </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
