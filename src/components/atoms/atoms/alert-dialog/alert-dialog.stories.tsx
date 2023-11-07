import type { StoryObj } from '@storybook/react'
import { Button } from '../button/button'
import { Icon } from '../icon/icon'
import { AlertDialog } from './alert-dialog'

export default {
  component: AlertDialog,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof AlertDialog>

export const Basic: Story = {
  render: () => {
    return (
      <AlertDialog>
        <AlertDialog.Trigger asChild>
          <Button>
            <Icon name="plus" />
            Add a method
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content className="max-h-[400px]">
          <AlertDialog.Header title="Add a method" />
          <AlertDialog.Body className="flex flex-col gap-y-6">
            <p>
              Mollit sit elit mollit eu eiusmod commodo. Aute do velit irure veniam irure esse nostrud ea Lorem ad
              aliqua elit. Veniam velit nulla irure ad incididunt id do quis ea. Cupidatat cillum occaecat dolore
              commodo velit quis aliqua aute exercitation.
            </p>
            <p>
              Mollit sit elit mollit eu eiusmod commodo. Aute do velit irure veniam irure esse nostrud ea Lorem ad
              aliqua elit. Veniam velit nulla irure ad incididunt id do quis ea. Cupidatat cillum occaecat dolore
              commodo velit quis aliqua aute exercitation.
            </p>
            <p>
              Mollit sit elit mollit eu eiusmod commodo. Aute do velit irure veniam irure esse nostrud ea Lorem ad
              aliqua elit. Veniam velit nulla irure ad incididunt id do quis ea. Cupidatat cillum occaecat dolore
              commodo velit quis aliqua aute exercitation.
            </p>
            <p>
              Mollit sit elit mollit eu eiusmod commodo. Aute do velit irure veniam irure esse nostrud ea Lorem ad
              aliqua elit. Veniam velit nulla irure ad incididunt id do quis ea. Cupidatat cillum occaecat dolore
              commodo velit quis aliqua aute exercitation.
            </p>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <AlertDialog.Action>Save</AlertDialog.Action>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    )
  },
}
