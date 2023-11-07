import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './toast'

const meta: Meta<typeof Toast> = {
  component: Toast,
}

export default meta

type Story = StoryObj<typeof Toast>

export const Basic: Story = {
  render() {
    return (
      <Toast.Provider>
        <Toast.Viewport />
        <Toast open>
          <Toast.Title>Successfully saved!</Toast.Title>
          <Toast.Description>Anyone with a link can now view this file.</Toast.Description>
        </Toast>
      </Toast.Provider>
    )
  },
}

export const Error: Story = {
  render() {
    return (
      <Toast.Provider>
        <Toast.Viewport />
        <Toast intent="error" open>
          <Toast.Title>Something went wrong!</Toast.Title>
          <Toast.Description>Anyone with a link can now view this file.</Toast.Description>
        </Toast>
      </Toast.Provider>
    )
  },
}
