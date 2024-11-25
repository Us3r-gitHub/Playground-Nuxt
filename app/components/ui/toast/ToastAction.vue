<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ToastAction, type ToastActionProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastActionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastAction v-bind="delegatedProps" :class="cn('tw-inline-flex tw-h-8 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-slate-200 tw-bg-transparent tw-px-3 tw-text-sm tw-font-medium tw-ring-offset-white tw-transition-colors hover:tw-bg-slate-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-slate-950 focus:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50 group-[.destructive]:tw-border-slate-100/40 group-[.destructive]:hover:tw-border-red-500/30 group-[.destructive]:hover:tw-bg-red-500 group-[.destructive]:hover:tw-text-slate-50 group-[.destructive]:focus:tw-ring-red-500 dark:tw-border-slate-800 dark:tw-ring-offset-slate-950 dark:hover:tw-bg-slate-800 dark:focus:tw-ring-slate-300 dark:group-[.destructive]:tw-border-slate-800/40 dark:group-[.destructive]:hover:tw-border-red-900/30 dark:group-[.destructive]:hover:tw-bg-red-900 dark:group-[.destructive]:hover:tw-text-slate-50 dark:group-[.destructive]:focus:tw-ring-red-900', props.class)">
    <slot />
  </ToastAction>
</template>
