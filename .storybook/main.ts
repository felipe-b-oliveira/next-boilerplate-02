import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(mjs|ts|tsx)'],
  staticDirs: ['../public'], //👈 Configures the static asset folder in Storybook
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
    '@storybook/addon-styling',
    '@storybook/addon-knobs',
    '@storybook/manager-api'
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
