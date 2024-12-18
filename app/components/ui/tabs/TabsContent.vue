<script setup lang="ts">
import { cn } from '~/lib/utils'
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent
    :class="cn('tw-mt-2 tw-ring-offset-white focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-slate-950 focus-visible:tw-ring-offset-2 dark:tw-ring-offset-slate-950 dark:focus-visible:tw-ring-slate-300', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
