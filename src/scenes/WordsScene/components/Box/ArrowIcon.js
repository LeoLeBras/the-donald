/* @flow */

import React from 'react'

type Props = {
  className: Object,
}

const ArrowIcon = (props: Props): Reat$Element => {
  const size = 26
  const { className } = props
  return (
    <svg className={className} fill="#FFFFFF" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
  )
}

export default ArrowIcon
