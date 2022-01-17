import {createStitches} from '@stitches/react'
import {gray} from '@radix-ui/colors'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...gray,
    },
  },
})
