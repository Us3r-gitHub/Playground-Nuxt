<script setup lang="ts">
import { cn } from '~/lib/utils'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="cn(
      'tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-sm tw-px-3 tw-py-1.5 tw-text-sm tw-font-medium tw-ring-offset-white tw-transition-all focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-slate-950 focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 data-[state=active]:tw-bg-white data-[state=active]:tw-text-slate-950 data-[state=active]:tw-shadow-sm dark:tw-ring-offset-slate-950 dark:focus-visible:tw-ring-slate-300 dark:data-[state=active]:tw-bg-slate-950 dark:data-[state=active]:tw-text-slate-50',
      props.class,
    )"
  >
    <span class="tw-truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
