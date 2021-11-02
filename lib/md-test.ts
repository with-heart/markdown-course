import type {Root} from 'mdast'
import type {VFile} from 'vfile'
import {visit} from 'unist-util-visit'

export const allHeadingDepthsTest = () => (tree: Root, file: VFile) => {
  const requiredHeadings = [1, 2, 3, 4, 5, 6]

  // we use a `Set` here so we don't needlessly store duplicate found depths
  const foundHeadings = new Set<number>()

  // visit each `heading` node and add its depth to the "found" list
  visit(tree, 'heading', (node) => {
    // check that we have a child `text` with actual text in its `value`
    const hasValidTextChild = Boolean(
      node.children.find(
        (child) => child.type === 'text' && child.value.length,
      ),
    )

    if (hasValidTextChild) {
      foundHeadings.add(node.depth)
    }
  })

  // missing headings are the difference between the required headings and the
  // found headings
  const missingHeadings = requiredHeadings.filter(
    (heading) =>
      // if the heading isn't in the "found" list, it's missing!
      !foundHeadings.has(heading),
  )

  // attach the missing headings to our `VFile`'s `data`
  file.data.missingHeadings = missingHeadings
}
