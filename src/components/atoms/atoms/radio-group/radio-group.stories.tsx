import type { StoryObj } from '@storybook/react'
import { RadioGroup } from './radio-group'

export default {
  component: RadioGroup,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof RadioGroup>

export const RadioButton: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroup.Button value="1">Choice 1</RadioGroup.Button>
        <RadioGroup.Button value="2">Choice 2</RadioGroup.Button>
        <RadioGroup.Button value="3">Choice 3</RadioGroup.Button>
      </RadioGroup>
    )
  },
}

export const RadioCard: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroup.Card value="1">Choice 1</RadioGroup.Card>
        <RadioGroup.Card value="2">Choice 2</RadioGroup.Card>
        <RadioGroup.Card value="3">Choice 3</RadioGroup.Card>
      </RadioGroup>
    )
  },
}
