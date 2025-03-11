import React from 'react'
import { Highlight } from '@douyinfe/semi-ui'

export default ({
  sourceString,
  searchWords
}) => {
  return (
    <Highlight sourceString={sourceString} searchWords={searchWords} />
  )
}
