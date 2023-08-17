import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(mjs|ts|tsx)'],
  staticDirs: ['../public'], //👈 Configures the static asset folder in Storybook
  addons: [
    '@storybook/addon-essentials',
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
