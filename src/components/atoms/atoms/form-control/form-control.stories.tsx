import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '../text-input/text-input'
import { FormControl } from './form-control'

const meta: Meta<typeof FormControl> = {
  component: FormControl,
  tags: ['autodocs'],
  args: {
    children: <TextInput />,
    label: 'This is a label',
  },
  argTypes: {
    children: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof FormControl>

export const Basic: Story = {}

export const WithErrorMessage: Story = {
  args: {
    errorMessage: 'Esse exercitation veniam ex do dolor ut et amet nostrud ea est.',
  },
}
