import { Job } from '@spark-ui/icons/dist/icons/Job'
import { Meta, StoryFn } from '@storybook/react'

import { Select } from '.'

const meta: Meta<typeof Select> = {
  title: 'Experimental/Select',
  component: Select,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div className="w-sz-480 ">
      <Select>
        <Select.Trigger>
          <Select.LeadingIcon>
            <Job />
          </Select.LeadingIcon>
          <Select.Value placeholder="--Pick a job type--" />
        </Select.Trigger>

        <Select.Items aria-label="Job type">
          <Select.Item value="1">Full time job</Select.Item>
          <Select.Item value="2">Part time job</Select.Item>
          <Select.Item value="3">Internship</Select.Item>
        </Select.Items>
      </Select>
    </div>
  )
}
