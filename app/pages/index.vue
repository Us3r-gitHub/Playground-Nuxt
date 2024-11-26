<script setup lang="ts">
import { useForm } from "vee-validate";
import { h } from "vue";
import * as z from "zod";
import { toast } from "~/components/ui/toast";
import {
  getLocalTimeZone,
  parseAbsolute,
  type DateValue,
} from "@internationalized/date";

const schema = z.object({
  date: z.coerce.date(),
});

const form = useForm({
  initialValues: {
    date: parseAbsolute(
      new Date().toISOString(),
      getLocalTimeZone()
    ) as DateValue as unknown as Date,
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
        <Button type="submit"> Submit </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
