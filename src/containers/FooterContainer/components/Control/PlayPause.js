/* @flow */

import React from 'react'

type Props = {
  pause: Function,
  paused: boolean,
}

const PlayPause = (props: Props): React$Element => {
  const { pause, paused } = props
  const size = 20
  return (
    <div onClick={pause}>
      { !paused &&
        <svg fill="#F05F4A" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      }
      { paused &&
        <svg fill="#F05F4A" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5v14l11-7z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      }
    </div>
  )
}

export default PlayPause
