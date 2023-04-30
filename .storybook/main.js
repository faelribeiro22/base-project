import remarkGfm from 'remark-gfm'

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    }
  ],
  webpackFinal: async (config) => {
    config.module.rules[0].exclude = /node_modules/
    return config
  },
  watchOptions: {
    ignored: /node_modules/
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true
  },
  core: {
    builder: 'webpack5'
  }
}
