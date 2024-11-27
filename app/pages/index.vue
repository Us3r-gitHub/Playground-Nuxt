<script setup lang="ts">
import { getLocalTimeZone, parseAbsolute } from "@internationalized/date";
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { toast } from "~/components/ui/toast";

const schema = z.object({
  date: z
    .any() // for all possibilities value (in case: DateValue type from @internationalized/date)
    .refine((val) => val, 'Invalid Date'), // Ensure the 'date' field is required (i.e., not undefined)
});

const form = useForm({
  validationSchema: toTypedSchema(schema), // for validation
  initialValues: {
    date: parseAbsolute(new Date().toISOString(), getLocalTimeZone()),
  },
});

function onSubmit(values: Record<string, any>) {
  toast({
    title: "You submitted the following values:",
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2))
    ),
  });
}
</script>

<template>
  <Card>
    <CardContent class="tw-p-0">
      <AutoForm class="w-2/3 space-y-6" :schema :form @submit="onSubmit">
        <template #date="slotProps">
          <AutoFormFieldDate v-bind="slotProps" required />
        </template>
        <Button type="submit"> Submit </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
