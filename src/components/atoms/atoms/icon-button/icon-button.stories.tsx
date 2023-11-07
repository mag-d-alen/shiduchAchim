import type { StoryObj } from '@storybook/react'
import { IconButton } from './icon-button'

export default {
  component: IconButton,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof IconButton>

export const Basic: Story = {
  args: {
    icon: 'x',
  },
}

export const Disabled: Story = {
  args: {
    icon: 'x',
    disabled: true,
  },
}
