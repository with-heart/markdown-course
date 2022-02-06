import {styled} from '../stitches.config'
import {Box} from './box'
import {Container} from './container'

export default {
  component: Container,
  title: 'Components/Container',
}

const DashedContainer = styled(Container, {
  backgroundColor: '$gray3',
  border: '5px dashed $gray6',
})

const Square = styled(Box, {
  width: '200px',
  height: '200px',
  backgroundColor: '$gray9',
})

const Text = styled('p', {
  lineHeight: '$md',
  '& + &': {
    marginTop: '1.5rem',
  },
})

export const Default = () => (
  <DashedContainer>
    <Square />
  </DashedContainer>
)

export const TextWidth = () => (
  <DashedContainer css={{backgroundColor: 'white'}}>
    <Text>
      Container is limited to sixty characters in width. This makes reading the
      text in a Container much easier on the eyes.
    </Text>
    <Text>
      If the line length is longer, it becomes a strain on the eye to move so
      far back and forth. If the length is significantly longer, you might have
      to turn your head to read it (depending on your screen size).
    </Text>
    <Text>
      It&apos;s also hard to find the beginning of the next line if a line is
      too long. More work for your brain.
    </Text>
    <Text>
      If the line is much shorter, it becomes a strain on the brain to process
      the information. Too little on the screen and it becomes hard to read at a
      comfortable pace. It takes more effort to process what little is
      available.
    </Text>
  </DashedContainer>
)

export const WithCenteredContent = () => (
  <DashedContainer centerContent>
    <Square />
  </DashedContainer>
)
