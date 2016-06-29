/* @flow */

const MUTE = 'MUTE'
const PAUSE = 'PAUSE'

const initialState = {
  muted: false,
  paused: false,
}

export default function player(state = initialState, action) {
  switch (action.type) {
    case MUTE:
      return {
        ...state,
        muted: !state.muted,
      }
    case PAUSE:
      return {
        ...state,
        paused: !state.paused,
      }
    default:
      return state
  }
}

export const mute = () => ({
  type: MUTE,
})

export const pause = () => ({
  type: PAUSE,
})
