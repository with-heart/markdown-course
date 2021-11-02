import {remark} from 'remark'
import {allHeadingDepthsTest} from './md-test'

describe('allHeadingDepthsTest', () => {
  test('reports missing headings', async () => {
    const text = `Hello World`
    const result = await remark().use(allHeadingDepthsTest).process(text)
    expect(result.data.missingHeadings).toEqual([1, 2, 3, 4, 5, 6])
  })

  test('reports no missing headings if all are present', async () => {
    const text = `
# H1
## H2
### H3
#### H4
##### H5
###### H6
    `.trim()
    const result = await remark().use(allHeadingDepthsTest).process(text)
    expect(result.data.missingHeadings).toEqual([])
  })

  test('reports empty headings as failures', async () => {
    const text = `
#
##
###
####
#####
######
    `.trim()
    const result = await remark().use(allHeadingDepthsTest).process(text)
    expect(result.data.missingHeadings).toEqual([1, 2, 3, 4, 5, 6])
  })
})
