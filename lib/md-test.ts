import type {Root} from 'mdast'
import type {VFile} from 'vfile'
import {visit} from 'unist-util-visit'

export const allHeadingDepthsTest = () => (tree: Root, file: VFile) => {
  const requiredHeadings = [1, 2, 3, 4, 5, 6]
  const foundHeadings: number[] = []

  // visit each `heading` node and add its depth to the "found" list
  visit(tree, 'heading', (node) => {
    foundHeadings.push(node.depth)
  })

  // missing headings are the difference between the required headings and the
  // found headings
  const missingHeadings = requiredHeadings.filter(
    (heading) =>
      // if the heading isn't in the "found" list, it's missing!
      !foundHeadings.includes(heading),
  )

  // attach the missing headings to our `VFile`'s `data`
  file.data.missingHeadings = missingHeadings
}
