/* @flow */

import React from 'react'
import { LineChart } from 'react-d3-components'
import popularity from './data.json'
import styles from './Graph'

type Props = {}

const Graph = (props: Props): React$Element => {
  const data = [{
    label: 'somethingA',
    values: popularity['d'].map((item, index) => ({
      x: index,
      y: item.m,
    }))
  }];
  return (
    <div className={styles.container}>
      <LineChart
        data={data}
        width={window.innerWidth}
        height={300}
        interpolate={"basis"}
      />
    </div>
  )
}

export default Graph
