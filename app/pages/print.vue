<script setup lang="ts">
export type AccountOrPassword = "account" | "password";

const tabs: { key: AccountOrPassword; title: string }[] = [
  { key: "account", title: "ACCOUNT" },
  { key: "password", title: "PASSWORD" },
];
const currentTab = ref<AccountOrPassword>("account");
</script>

<template>
  <Tabs v-model="currentTab">
    <TabsList>
      <TabsTrigger v-for="tab in tabs" :key="tab.key" :value="tab.key">
        {{ tab.title }}
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="tab in tabs" :key="tab.key" :value="tab.key">
      <BaseTabContent :type="currentTab" />
    </TabsContent>
  </Tabs>
</template>
