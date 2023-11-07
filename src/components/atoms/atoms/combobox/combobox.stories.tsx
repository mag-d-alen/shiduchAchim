import type { Meta, StoryObj } from '@storybook/react'
import { Combobox } from './combobox'

const meta: Meta<typeof Combobox> = {
  component: Combobox,
}

interface Person {
  id: number
  name: string
}

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export default meta

type Story = StoryObj<typeof Combobox>

export const Basic: Story = {
  render() {
    return (
      <Combobox>
        <Combobox.Input<Person> displayValue={(person) => person.name} />
        <Combobox.Options>
          {people.map((person) => (
            <Combobox.Option key={person.id} value={person}>
              {person.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    )
  },
}
