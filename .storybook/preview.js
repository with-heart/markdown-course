import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {globalStyles} from '../stitches.config'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}

globalStyles()
