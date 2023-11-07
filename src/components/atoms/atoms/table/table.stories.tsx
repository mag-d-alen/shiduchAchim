import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './table'

const meta: Meta<typeof Table> = {
  component: Table,
}

export default meta

type Story = StoryObj<typeof Table>

const people = [
  { name: 'Durward Reynolds', email: 'test@test.com', position: 'Rakaz' },
  { name: 'Kenton Towne', email: 'test@test.com', position: 'Rakaz' },
  { name: 'Therese Wunsch', email: 'test@test.com', position: 'Rakaz' },
  { name: 'Benedict Kessler', email: 'test@test.com', position: 'Rakaz' },
  { name: 'Katelyn Rohan', email: 'test@test.com', position: 'Rakaz' },
]

export const Basic: Story = {
  render() {
    return (
      <Table>
        <Table.THead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Position</Table.Th>
          </Table.Tr>
        </Table.THead>
        <Table.TBody>
          {people.map((person) => (
            <Table.Tr key={person.name}>
              <Table.Td>{person.name}</Table.Td>
              <Table.Td>{person.email}</Table.Td>
              <Table.Td>{person.position}</Table.Td>
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table>
    )
  },
}
