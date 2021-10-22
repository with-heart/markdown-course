import {useMemo, useState} from 'react'
import * as runtime from 'react/jsx-runtime'
import {evaluateSync} from 'xdm'

export default function Preview() {
  const [source, setSource] = useState('')

  const {default: Compiled} = useMemo(
    () =>
      evaluateSync(
        source,
        // @ts-expect-error works but type isn't lining up for some reason
        runtime,
      ),
    [source],
  )

  return (
    <div>
      <textarea
        value={source}
        onChange={(event) => setSource(event.target.value)}
        cols={40}
        rows={20}
      />
      <Compiled />
    </div>
  )
}
