import type { StoryObj } from '@storybook/react'
import { Button } from '../button/button'
import { Icon } from '../icon/icon'
import { DropdownMenu } from './dropdown-menu'

export default {
  component: DropdownMenu,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof DropdownMenu>

export const Basic: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button>Open menu</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Icon name="pen" />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            <Icon name="arrow-up" />
            Move up
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-red-500">
            <Icon name="trash-can" />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    )
  },
}
