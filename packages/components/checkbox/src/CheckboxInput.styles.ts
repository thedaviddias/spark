import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'h-sz-20 w-sz-20 border-md peer my-[var(--sz-1)] shrink-0 items-center justify-center self-baseline rounded-sm bg-transparent',
    'spark-disabled:opacity-dim-3 spark-disabled:cursor-not-allowed spark-disabled:hover:ring-0',
    'focus-visible:ring-outline-high focus-visible:outline-none focus-visible:ring-2',
    'hover:border-primary-container hover:outline-none hover:ring-2',
    'u-shadow-border-transition',
  ],
  {
    variants: {
      intent: makeVariants<'intent', ['primary', 'success', 'alert', 'error', 'info', 'neutral']>({
        primary: [
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-primary spark-state-indeterminate:bg-primary',
          'spark-state-checked:border-primary spark-state-checked:bg-primary',
        ],
        success: [
          'spark-state-unchecked:border-success',
          'spark-state-indeterminate:border-success spark-state-indeterminate:bg-success',
          'spark-state-checked:border-success spark-state-checked:bg-success',
        ],
        alert: [
          'spark-state-unchecked:border-alert',
          'spark-state-indeterminate:border-alert spark-state-indeterminate:bg-alert',
          'spark-state-checked:border-alert spark-state-checked:bg-alert',
        ],
        error: [
          'spark-state-unchecked:border-error',
          'spark-state-indeterminate:border-error spark-state-indeterminate:bg-error',
          'spark-state-checked:border-error spark-state-checked:bg-error',
        ],
        info: [
          'spark-state-unchecked:border-info',
          'spark-state-indeterminate:border-info spark-state-indeterminate:bg-info',
          'spark-state-checked:border-info spark-state-checked:bg-info',
        ],
        neutral: [
          'spark-state-unchecked:border-neutral',
          'spark-state-indeterminate:border-neutral spark-state-indeterminate:bg-neutral',
          'spark-state-checked:border-neutral spark-state-checked:bg-neutral',
        ],
      }),
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
