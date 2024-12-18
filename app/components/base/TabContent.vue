<script setup lang="ts">
import type { AccountOrPassword } from "~/pages/print.vue";

defineProps<{ type: AccountOrPassword }>();
</script>

<template>
  <BaseAccount v-if="type === 'account'" />
  <BasePassword v-else />
</template>
