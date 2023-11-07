import type { StoryObj } from '@storybook/react'
import { Button } from './button'

export default {
  component: Button,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    children: 'Basic',
  },
}

export const Outline: Story = {
  args: {
    intent: 'outline',
    children: 'Outline',
  },
}

export const Text: Story = {
  args: {
    intent: 'text',
    children: 'Text',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    intent: 'primary',
    disabled: true,
    children: 'Primary disabled',
  },
}

export const OutlineDisabled: Story = {
  args: {
    intent: 'outline',
    disabled: true,
    children: 'Outline disabled',
  },
}

export const TextDisabled: Story = {
  args: {
    intent: 'text',
    disabled: true,
    children: 'Text disabled',
  },
}

export const WithIconLeft: Story = {
  args: {
    children: 'Add to activity',
    iconLeft: 'plus',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
}
