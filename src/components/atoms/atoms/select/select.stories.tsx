import type { Meta, StoryObj } from '@storybook/react'
import { FormControl } from '../form-control/form-control'
import { Select } from './select'

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

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  render({ disabled }) {
    return (
      <Select<Person> by="id" disabled={disabled}>
        <Select.Button placeholder="Select a person...">{({ value }) => value?.name}</Select.Button>
        <Select.Options>
          {people.map((person) => (
            <Select.Option key={person.id} value={person}>
              {person.name}
            </Select.Option>
          ))}
        </Select.Options>
      </Select>
    )
  },
}

export default meta

type Story = StoryObj<typeof Select>

export const Basic: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Multiple: Story = {
  render() {
    return (
      <Select<Person[]> by="id" multiple>
        {({ value }) => (
          <>
            <Select.Button placeholder="Select some people..." />
            <Select.SelectedList>
              {value.map((item) => (
                <Select.SelectedItem key={item.id}>{item.name}</Select.SelectedItem>
              ))}
            </Select.SelectedList>
            <Select.Options>
              {people.map((person) => (
                <Select.Option key={person.id} value={person}>
                  {person.name}
                </Select.Option>
              ))}
            </Select.Options>
          </>
        )}
      </Select>
    )
  },
}

export const InsideFormControl: Story = {
  render() {
    return (
      <FormControl label="Person">
        <Select<Person> by="id">
          <Select.Button placeholder="Select a person...">{({ value }) => value?.name}</Select.Button>
          <Select.Options>
            {people.map((person) => (
              <Select.Option key={person.id} value={person}>
                {person.name}
              </Select.Option>
            ))}
          </Select.Options>
        </Select>
      </FormControl>
    )
  },
}
