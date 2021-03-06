module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@geometricpanda/storybook-addon-badges',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
  ],
}
