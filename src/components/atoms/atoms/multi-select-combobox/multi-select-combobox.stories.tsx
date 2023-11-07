import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MultiSelectCombobox } from './multi-select-combobox'

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

const meta: Meta<typeof MultiSelectCombobox> = {
  component: MultiSelectCombobox,
}

export default meta

type Story = StoryObj<typeof MultiSelectCombobox>

function ItemRemovingMultiSelectCombobox() {
  const [selected, setSelected] = React.useState([people[0]])

  return (
    <MultiSelectCombobox<Person[]> by="id" onChange={setSelected} value={selected}>
      {({ value }) => (
        <>
          <MultiSelectCombobox.Input />
          <MultiSelectCombobox.SelectedList>
            {value.map((item) => (
              <MultiSelectCombobox.SelectedItem
                key={item.id}
                onRemoveClicked={() => {
                  setSelected((prevSelected) => prevSelected.filter(({ id }) => id !== item.id))
                }}
              >
                {item.name}
              </MultiSelectCombobox.SelectedItem>
            ))}
          </MultiSelectCombobox.SelectedList>
          <MultiSelectCombobox.Options>
            {people.map((person) => (
              <MultiSelectCombobox.Option key={person.id} value={person}>
                {person.name}
              </MultiSelectCombobox.Option>
            ))}
          </MultiSelectCombobox.Options>
        </>
      )}
    </MultiSelectCombobox>
  )
}

export const Basic: Story = {
  render: ItemRemovingMultiSelectCombobox,
}
