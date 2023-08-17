import type { Meta, StoryObj } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Main from './main'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export default meta
type Story = StoryObj<typeof Main>

export const Basic: Story = {
  render: () => (
    <Main
      title={text('Title', 'React Avançado')}
      description={text('Description', 'TypeScript, ReactJS, NextJS e Styled Components')}
    />
  )
}
