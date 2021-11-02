import {useState} from 'react'
import {remark} from 'remark'
import {MarkdownPreview} from '../components/MarkdownPreview'
import {allHeadingDepthsTest} from '../lib/md-test'

export default function Headings() {
  const [source, setSource] = useState('')
  const result = remark().use(allHeadingDepthsTest).processSync(source)
  const missingHeadings = result.data.missingHeadings as number[]

  const HeadingTest = ({depth}: {depth: number}) => {
    // if `depth` is in `missingHeadings`, the test should fail
    const isFail = missingHeadings.includes(depth)
    const symbol = isFail ? '❌' : '✅'
    return (
      <>
        {symbol} Heading depth {depth}
      </>
    )
  }

  return (
    <div>
      <ul>
        {[1, 2, 3, 4, 5, 6].map((depth) => (
          <li key={depth}>
            <HeadingTest depth={depth} />
          </li>
        ))}
      </ul>
      <textarea
        value={source}
        onChange={(event) => setSource(event.target.value)}
        cols={40}
        rows={20}
      />
      <MarkdownPreview source={source} />
    </div>
  )
}
