import type { ToastRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export { default as Toast } from './Toast.vue'
export { default as ToastAction } from './ToastAction.vue'
export { default as ToastClose } from './ToastClose.vue'
export { default as ToastDescription } from './ToastDescription.vue'
export { default as Toaster } from './Toaster.vue'
export { default as ToastProvider } from './ToastProvider.vue'
export { default as ToastTitle } from './ToastTitle.vue'
export { default as ToastViewport } from './ToastViewport.vue'
export { toast, useToast } from './use-toast'

import { cva, type VariantProps } from 'class-variance-authority'

export const toastVariants = cva(
  'tw-group tw-pointer-events-auto tw-relative tw-flex tw-w-full tw-items-center tw-justify-between tw-space-x-4 tw-overflow-hidden tw-rounded-md tw-border tw-border-slate-200 tw-p-6 tw-pr-8 tw-shadow-lg tw-transition-all data-[swipe=cancel]:tw-translate-x-0 data-[swipe=end]:tw-translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:tw-translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:tw-transition-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[swipe=end]:tw-animate-out data-[state=closed]:tw-fade-out-80 data-[state=closed]:tw-slide-out-to-right-full data-[state=open]:tw-slide-in-from-top-full data-[state=open]:sm:tw-slide-in-from-bottom-full dark:tw-border-slate-800',
  {
    variants: {
      variant: {
        default: 'tw-border tw-bg-white tw-text-slate-950 dark:tw-bg-slate-950 dark:tw-text-slate-50',
        destructive:
                    'tw-destructive tw-group tw-border-red-500 tw-bg-red-500 tw-text-slate-50 dark:tw-border-red-900 dark:tw-bg-red-900 dark:tw-text-slate-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps extends ToastRootProps {
  class?: HTMLAttributes['class']
  variant?: ToastVariants['variant']
  onOpenChange?: ((value: boolean) => void) | undefined
}
