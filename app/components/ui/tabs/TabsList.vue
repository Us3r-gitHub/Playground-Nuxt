<script setup lang="ts">
import { cn } from '~/lib/utils'
import { TabsList, type TabsListProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn(
      'tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-slate-100 tw-p-1 tw-text-slate-500 dark:tw-bg-slate-800 dark:tw-text-slate-400',
      props.class,
    )"
  >
    <slot />
  </TabsList>
</template>
