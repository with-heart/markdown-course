import {useState} from 'react'
import {MarkdownPreview} from '../components/MarkdownPreview'

export default function Preview() {
  const [source, setSource] = useState('')

  return (
    <div>
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
