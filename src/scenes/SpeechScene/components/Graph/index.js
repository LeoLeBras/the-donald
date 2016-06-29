/* @flow */

import React, { Component } from 'react'
import { LineChart, AreaChart, ScatterPlot } from 'react-d3-components'
import styles from './Graph'

type Props = {
  progress: number,
}

class Graph extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.progress !== this.props.progress
  }

  render() {
    const { progress, popularity, events } = this.props
    const popularityData = {
      values: popularity['d'].map((item, index) => ({
        x: index,
        y: item.m,
        date: item.d,
      }))
    }

    return (
      <div className={styles.container}>
        <div className={styles.chart}>
          <LineChart
            data={[popularityData]}
            width={window.innerWidth}
            height={200}
            colorScale={() => 'rgba(255, 255, 255, .75)'}
          />
        </div>
        <div className={styles.chart} style={{ width: window.innerWidth * progress + 'px' }}>
          <AreaChart
            data={[popularityData]}
            width={window.innerWidth}
            height={200}
            colorScale={() => 'rgba(255, 255, 255, .5)'}
          />
        </div>
        <div className={styles.chart}>
          <ScatterPlot
            width={window.innerWidth}
            height={200}
            rScale={() => 150}
            colorScale={() => 'white'}
            data={[{
              values: [
                ...popularityData.values
                  .filter(
                    item => events.some(
                      event => event.date == item.date
                    )
                  ),
                {
                  x: 0,
                  y: 0
                }, {
                  x: popularityData.values.length - 1,
                  y: popularity.s.maxM,
                }
              ]
            }]}
          />
        </div>
      </div>
    )
  }

}

export default Graph
