<script setup lang="ts">
import { useVueToPrint } from "vue-to-print";

export type AccountOrPassword = "account" | "password";

const tabs: { key: AccountOrPassword; title: string }[] = [
  { key: "account", title: "ACCOUNT" },
  { key: "password", title: "PASSWORD" },
];
const currentTab = ref<AccountOrPassword>("account");

// VueToPrint
const componentRef = ref();
const { handlePrint } = useVueToPrint({
  content: componentRef,
  documentTitle: currentTab,
  removeAfterPrint: true,
});
</script>

<template>
  <Card>
    <CardContent class="tw-p-0">
      <Tabs v-model="currentTab">
        <TabsList>
          <TabsTrigger v-for="tab in tabs" :key="tab.key" :value="tab.key">
            {{ tab.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="tab in tabs" :key="tab.key" :value="tab.key">
          <BaseTabContent ref="componentRef" :type="currentTab" />
        </TabsContent>
      </Tabs>
    </CardContent>
    <CardFooter>
      <Button @click="handlePrint">Print</Button>
    </CardFooter>
  </Card>
</template>
