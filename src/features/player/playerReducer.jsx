const initialState = {
  position: [40, 40],
}

export default function playerReducer(state = initialState, action) {
  switch(action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload
      }
    default:
      return state
  }
}
