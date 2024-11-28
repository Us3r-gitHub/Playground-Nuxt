<script setup lang="ts">
import * as z from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { toast } from "~/components/ui/toast";

const schema = z.object({
  text: z.string().min(1),
  number: z.number().min(1),
  text2Number: z.string().min(1).transform((val) => { if (val) return +val.replace(/\D+/g, ''); }),
});

const formValue = reactive({ text: 'description', number: 100, text2Number: '100' });

const form = useForm({
  validationSchema: toTypedSchema(schema),
  initialValues: { text: '', number: 0, text2Number: '0' }, // avoid to use vue reactivity https://github.com/logaretm/vee-validate/discussions/4955
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
      <pre>form - {{ form.values }}</pre>
      <pre>formValue - {{ formValue }}</pre>

      <AutoForm class="w-2/3 space-y-6" :schema :form @submit="onSubmit">
        <template #text="slotProps">
          <AutoFormFieldInput v-model="formValue.text" v-bind="slotProps" required />
        </template>
        <template #number="slotProps">
          <AutoFormFieldNumber v-model="formValue.number" v-bind="slotProps" required />
        </template>
        <template #text2Number="slotProps">
          <AutoFormFieldInput v-model="formValue.text2Number" v-bind="slotProps" required />
        </template>

        <Button type="submit"> Submit </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
