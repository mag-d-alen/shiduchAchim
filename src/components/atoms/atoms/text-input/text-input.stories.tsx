import type { StoryObj } from '@storybook/react'
import { TextInput } from './text-input'

export default {
  component: TextInput,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof TextInput>

export const Basic: Story = {
  args: {
    placeholder: 'This is a placeholder',
  },
}

export const WithValue: Story = {
  args: {
    value: 'This is a value',
  },
}

export const WithStatusError: Story = {
  args: {
    value: 'This is a value',
    intent: 'error',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: `I'm disabled`,
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    value: `I'm large`,
  },
}
