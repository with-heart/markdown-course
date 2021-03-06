import {render} from '@testing-library/react'
import {MarkdownPreview} from './markdown-preview'

// we disable these two rules because we want to select individual elements.
// normally a no-no but it's fine in this case because we're testing that
// elements are part of the output.
/* eslint-disable testing-library/no-container, testing-library/no-node-access */

test('MarkdownPreview', () => {
  const source = `
# Heading 1

## Heading 2

_italic_

**bold**
  `.trim()
  const {container} = render(<MarkdownPreview source={source} />)

  expect(container.querySelector('h1')?.innerHTML).toBe('Heading 1')
  expect(container.querySelector('h2')?.innerHTML).toBe('Heading 2')
  expect(container.querySelector('em')?.innerHTML).toBe('italic')
  expect(container.querySelector('strong')?.innerHTML).toBe('bold')
})
