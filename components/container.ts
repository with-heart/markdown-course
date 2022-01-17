import {styled} from '../stitches.config'

export const Container = styled('div', {
  width: '$full',
  maxWidth: '60ch',
  mx: 'auto',

  variants: {
    centerContent: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
})
