import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { Icon } from '.'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
}

export default meta

export const Default: StoryFn = _args => (
  <Icon>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.91958 20.1667C8.73748 20.1667 8.56045 20.1323 8.38847 20.0635C8.21649 19.9947 8.05969 19.8915 7.91806 19.7539L2.42489 14.4176C2.14163 14.1425 2 13.8083 2 13.4152C2 13.0222 2.14163 12.688 2.42489 12.4129C2.70814 12.1377 3.04704 12.0001 3.44158 12.0001C3.83612 12.0001 4.18513 12.1377 4.48862 12.4129L8.91958 16.7173L19.5417 6.42797C19.825 6.1528 20.1639 6.0103 20.5584 6.00048C20.953 5.99065 21.2919 6.13315 21.5751 6.42797C21.8584 6.70313 22 7.03727 22 7.43036C22 7.82346 21.8584 8.15759 21.5751 8.43276L9.92109 19.7539C9.77946 19.8915 9.62266 19.9947 9.45068 20.0635C9.27871 20.1323 9.10167 20.1667 8.91958 20.1667Z" />
    </svg>
  </Icon>
)

const sizes: ComponentProps<typeof Icon>['size'][] = ['sm', 'md', 'lg', 'xl']

export const Sizes: StoryFn = _args => (
  <>
    <div className="flex gap-lg">
      {sizes.map(size => (
        <div key={size} className="flex flex-col items-center">
          <StoryLabel>{size}</StoryLabel>
          <Icon size={size}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.91958 20.1667C8.73748 20.1667 8.56045 20.1323 8.38847 20.0635C8.21649 19.9947 8.05969 19.8915 7.91806 19.7539L2.42489 14.4176C2.14163 14.1425 2 13.8083 2 13.4152C2 13.0222 2.14163 12.688 2.42489 12.4129C2.70814 12.1377 3.04704 12.0001 3.44158 12.0001C3.83612 12.0001 4.18513 12.1377 4.48862 12.4129L8.91958 16.7173L19.5417 6.42797C19.825 6.1528 20.1639 6.0103 20.5584 6.00048C20.953 5.99065 21.2919 6.13315 21.5751 6.42797C21.8584 6.70313 22 7.03727 22 7.43036C22 7.82346 21.8584 8.15759 21.5751 8.43276L9.92109 19.7539C9.77946 19.8915 9.62266 19.9947 9.45068 20.0635C9.27871 20.1323 9.10167 20.1667 8.91958 20.1667Z" />
            </svg>
          </Icon>
        </div>
      ))}

      <div className="flex flex-col items-center">
        <StoryLabel>current</StoryLabel>
        <Icon size="current">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.91958 20.1667C8.73748 20.1667 8.56045 20.1323 8.38847 20.0635C8.21649 19.9947 8.05969 19.8915 7.91806 19.7539L2.42489 14.4176C2.14163 14.1425 2 13.8083 2 13.4152C2 13.0222 2.14163 12.688 2.42489 12.4129C2.70814 12.1377 3.04704 12.0001 3.44158 12.0001C3.83612 12.0001 4.18513 12.1377 4.48862 12.4129L8.91958 16.7173L19.5417 6.42797C19.825 6.1528 20.1639 6.0103 20.5584 6.00048C20.953 5.99065 21.2919 6.13315 21.5751 6.42797C21.8584 6.70313 22 7.03727 22 7.43036C22 7.82346 21.8584 8.15759 21.5751 8.43276L9.92109 19.7539C9.77946 19.8915 9.62266 19.9947 9.45068 20.0635C9.27871 20.1323 9.10167 20.1667 8.91958 20.1667Z" />
          </svg>
        </Icon>
      </div>
    </div>
  </>
)

const intents: ComponentProps<typeof Icon>['intent'][] = [
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
]

export const Intent: StoryFn = _args => (
  <div className="flex gap-lg">
    {intents.map(intent => (
      <div key={intent} className="flex flex-col items-center">
        <StoryLabel>{intent}</StoryLabel>
        <Icon intent={intent}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.91958 20.1667C8.73748 20.1667 8.56045 20.1323 8.38847 20.0635C8.21649 19.9947 8.05969 19.8915 7.91806 19.7539L2.42489 14.4176C2.14163 14.1425 2 13.8083 2 13.4152C2 13.0222 2.14163 12.688 2.42489 12.4129C2.70814 12.1377 3.04704 12.0001 3.44158 12.0001C3.83612 12.0001 4.18513 12.1377 4.48862 12.4129L8.91958 16.7173L19.5417 6.42797C19.825 6.1528 20.1639 6.0103 20.5584 6.00048C20.953 5.99065 21.2919 6.13315 21.5751 6.42797C21.8584 6.70313 22 7.03727 22 7.43036C22 7.82346 21.8584 8.15759 21.5751 8.43276L9.92109 19.7539C9.77946 19.8915 9.62266 19.9947 9.45068 20.0635C9.27871 20.1323 9.10167 20.1667 8.91958 20.1667Z" />
          </svg>
        </Icon>
      </div>
    ))}

    <div className="flex flex-col items-center">
      <StoryLabel>current</StoryLabel>
      <Icon size="current">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.91958 20.1667C8.73748 20.1667 8.56045 20.1323 8.38847 20.0635C8.21649 19.9947 8.05969 19.8915 7.91806 19.7539L2.42489 14.4176C2.14163 14.1425 2 13.8083 2 13.4152C2 13.0222 2.14163 12.688 2.42489 12.4129C2.70814 12.1377 3.04704 12.0001 3.44158 12.0001C3.83612 12.0001 4.18513 12.1377 4.48862 12.4129L8.91958 16.7173L19.5417 6.42797C19.825 6.1528 20.1639 6.0103 20.5584 6.00048C20.953 5.99065 21.2919 6.13315 21.5751 6.42797C21.8584 6.70313 22 7.03727 22 7.43036C22 7.82346 21.8584 8.15759 21.5751 8.43276L9.92109 19.7539C9.77946 19.8915 9.62266 19.9947 9.45068 20.0635C9.27871 20.1323 9.10167 20.1667 8.91958 20.1667Z" />
        </svg>
      </Icon>
    </div>
  </div>
)

export const Label: StoryFn = _args => (
  <Icon label="Checked">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.91958 20.1667C8.73748 20.1667 8.56045 20.1323 8.38847 20.0635C8.21649 19.9947 8.05969 19.8915 7.91806 19.7539L2.42489 14.4176C2.14163 14.1425 2 13.8083 2 13.4152C2 13.0222 2.14163 12.688 2.42489 12.4129C2.70814 12.1377 3.04704 12.0001 3.44158 12.0001C3.83612 12.0001 4.18513 12.1377 4.48862 12.4129L8.91958 16.7173L19.5417 6.42797C19.825 6.1528 20.1639 6.0103 20.5584 6.00048C20.953 5.99065 21.2919 6.13315 21.5751 6.42797C21.8584 6.70313 22 7.03727 22 7.43036C22 7.82346 21.8584 8.15759 21.5751 8.43276L9.92109 19.7539C9.77946 19.8915 9.62266 19.9947 9.45068 20.0635C9.27871 20.1323 9.10167 20.1667 8.91958 20.1667Z" />
    </svg>
  </Icon>
)
