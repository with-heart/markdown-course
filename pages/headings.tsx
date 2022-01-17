import {useState} from 'react'
import {remark} from 'remark'
import {Container} from '../components/container'
import {MarkdownPreview} from '../components/markdown-preview'
import {Textarea} from '../components/textarea'
import {allHeadingDepthsTest} from '../lib/md-test'

export default function Headings(): JSX.Element {
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
    <Container centerContent>
      <div>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((depth) => (
            <li key={depth}>
              <HeadingTest depth={depth} />
            </li>
          ))}
        </ul>
        <Textarea
          value={source}
          onChange={(event) => setSource(event.target.value)}
          cols={30}
          rows={8}
        />
        <MarkdownPreview source={source} />
      </div>
    </Container>
  )
}
