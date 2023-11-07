import type { StoryObj } from '@storybook/react'
import { Icon } from '../icon/icon'
import { Card } from './card'

export default {
  component: Card,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof Card>

export const Basic: Story = {
  args: {
    children: `I'm a card!`,
  },
}

export const Highlighted: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-6 p-6">
        <p>
          Do ullamco consectetur duis mollit duis mollit qui ut proident officia. Irure veniam dolore elit anim commodo
          eu veniam nostrud commodo fugiat nulla. Nulla tempor nulla anim veniam fugiat ipsum minim nisi reprehenderit.
          Ad magna ex do officia ad fugiat ea et irure eiusmod consequat ullamco ut.
        </p>
        <p>
          Do ullamco consectetur duis mollit duis mollit qui ut proident officia. Irure veniam dolore elit anim commodo
          eu veniam nostrud commodo fugiat nulla. Nulla tempor nulla anim veniam fugiat ipsum minim nisi reprehenderit.
          Ad magna ex do officia ad fugiat ea et irure eiusmod consequat ullamco ut.
        </p>
        <p>
          Do ullamco consectetur duis mollit duis mollit qui ut proident officia. Irure veniam dolore elit anim commodo
          eu veniam nostrud commodo fugiat nulla. Nulla tempor nulla anim veniam fugiat ipsum minim nisi reprehenderit.
          Ad magna ex do officia ad fugiat ea et irure eiusmod consequat ullamco ut.
        </p>
        <p>
          Do ullamco consectetur duis mollit duis mollit qui ut proident officia. Irure veniam dolore elit anim commodo
          eu veniam nostrud commodo fugiat nulla. Nulla tempor nulla anim veniam fugiat ipsum minim nisi reprehenderit.
          Ad magna ex do officia ad fugiat ea et irure eiusmod consequat ullamco ut.
        </p>
      </div>
    ),
    isHighlighted: true,
  },
}

export const WithBody: Story = {
  render: () => (
    <Card>
      <Card.Body>I'm a card!</Card.Body>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card>
      I'm a card!
      <Card.Footer>I'm a footer!</Card.Footer>
    </Card>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Card>
      <Card.Header
        title="I'm a header!"
        slotStart={<Icon name="question" className="h-4 w-4" />}
        slotEnd={<Icon name="pencil" className="h-4 w-4" />}
      />
      I'm a card!
    </Card>
  ),
}
