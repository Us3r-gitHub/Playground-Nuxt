<script setup lang="ts">
import { cn } from '@/lib/utils'
import { X } from 'lucide-vue-next'
import { ToastClose, type ToastCloseProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastCloseProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose v-bind="delegatedProps" :class="cn('tw-absolute tw-right-2 tw-top-2 tw-rounded-md tw-p-1 tw-text-slate-950/50 tw-opacity-0 tw-transition-opacity hover:tw-text-slate-950 focus:tw-opacity-100 focus:tw-outline-none focus:tw-ring-2 group-hover:tw-opacity-100 group-[.destructive]:tw-text-red-300 group-[.destructive]:hover:tw-text-red-50 group-[.destructive]:focus:tw-ring-red-400 group-[.destructive]:focus:tw-ring-offset-red-600 dark:tw-text-slate-50/50 dark:hover:tw-text-slate-50', props.class)">
    <X class="tw-h-4 tw-w-4" />
  </ToastClose>
</template>
