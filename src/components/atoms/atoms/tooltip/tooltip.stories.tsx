import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '../icon-button/icon-button'
import { Tooltip } from './tooltip'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {
  render() {
    return (
      <Tooltip.Provider>
        <Tooltip>
          <Tooltip.Trigger>
            <IconButton icon="plus" />
          </Tooltip.Trigger>
          <Tooltip.Content>I am inside the tooltip</Tooltip.Content>
        </Tooltip>
      </Tooltip.Provider>
    )
  },
}
