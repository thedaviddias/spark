import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="gap-sm flex items-center">
    <Checkbox id={'c1'} />
    <label
      htmlFor={'c1'}
      className="text-body-1 peer-disabled:opacity-dim-3 cursor-pointer pl-[4px] font-medium  peer-disabled:cursor-not-allowed"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const Disabled: StoryFn = _args => (
  <div className="gap-sm flex items-center">
    <Checkbox id={'c2'} disabled />
    <label
      htmlFor={'c2'}
      className="text-body-1 peer-disabled:opacity-dim-3 cursor-pointer pl-[4px] font-medium  peer-disabled:cursor-not-allowed"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const DefaultChecked: StoryFn = _args => (
  <div className="gap-sm flex items-center">
    <Checkbox id={'c3'} defaultChecked />
    <label
      htmlFor={'c3'}
      className="text-body-1 peer-disabled:opacity-dim-3 cursor-pointer pl-[4px] font-medium  peer-disabled:cursor-not-allowed"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const Controlled: StoryFn = _args => {
  const [value, setValue] = useState(false)

  const handleChange = (checked: boolean) => {
    setValue(!!checked)
  }

  return (
    <div className="gap-sm flex items-center">
      <Checkbox id={'c4'} checked={value} onCheckedChange={handleChange} />
      <label
        htmlFor={'c4'}
        className="text-body-1 peer-disabled:opacity-dim-3 cursor-pointer pl-[4px] font-medium  peer-disabled:cursor-not-allowed"
      >
        Accept terms and conditions.
      </label>
    </div>
  )
}

const intent = ['primary', 'success', 'alert', 'error'] as const

export const Intent: StoryFn = _args => (
  <>
    {intent.map(color => {
      return (
        <div className="gap-sm flex items-center" key={color}>
          <Checkbox id={color} intent={color} />
          <label htmlFor={color}>{color}</label>
        </div>
      )
    })}
  </>
)
export const Icon: StoryFn = _args => (
  <div className="gap-sm flex items-center">
    <Checkbox
      id={'c6'}
      defaultChecked
      icon={
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
        </svg>
      }
    />
    <label
      htmlFor={'c6'}
      className="text-body-1 peer-disabled:opacity-dim-3 cursor-pointer pl-[4px] font-medium  peer-disabled:cursor-not-allowed"
    >
      Accept terms and conditions.
    </label>
  </div>
)
