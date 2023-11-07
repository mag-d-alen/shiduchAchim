import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button/button'
import { Dialog } from './dialog'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Basic: Story = {
  render() {
    return (
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>Toggle me</Button>
        </Dialog.Trigger>
        <Dialog.Content>I'm inside the dialog</Dialog.Content>
      </Dialog>
    )
  },
}
