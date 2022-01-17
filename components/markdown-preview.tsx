import {useMemo} from 'react'
import * as runtime from 'react/jsx-runtime'
import {evaluateSync} from 'xdm'

export interface MarkdownPreviewProps {
  /** The source text which will be compiled as Markdown. */
  source: string
}

export const MarkdownPreview = ({
  source,
}: MarkdownPreviewProps): JSX.Element => {
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
      <Compiled />
    </div>
  )
}
