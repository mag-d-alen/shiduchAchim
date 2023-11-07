import type { StoryObj } from '@storybook/react'
import { iconNames } from './generated'
import { Icon } from './icon'

export default {
  component: Icon,
}

type Story = StoryObj<typeof Icon>

export const Basic: Story = {
  render() {
    return (
      <div className="grid grid-cols-5 gap-4 bg-grey-200 p-4">
        {iconNames.map((name) => (
          <div className="flex flex-col items-center rounded bg-white p-2" key={name}>
            <Icon name={name} />
            <span className="mt-4 text-center">{name}</span>
          </div>
        ))}
      </div>
    )
  },
}
