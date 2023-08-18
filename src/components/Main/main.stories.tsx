import type { Meta, StoryObj } from '@storybook/react'

import Main from './main'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  args: {
    title: 'Storybook - React Avançado',
    description: 'Storybook - TypeScript, ReactJS, NextJS e Styled Components'
  },
  argTypes: {
    title: Text,
    description: Text
  }
}

export default meta
type Story = StoryObj<typeof Main>

export const Basic: Story = {
  render: (args) => <Main {...args} />
}
