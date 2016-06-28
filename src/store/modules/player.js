/* @flow */

const MUTE = 'MUTE'

const initialState = {
  muted: false,
}

export default function player(state = initialState, action) {
  switch (action.type) {
    case MUTE:
      return {
        ...state,
        muted: !state.muted,
      }
    default:
      return state
  }
}

export const mute = () => ({
  type: MUTE,
})
