const initialState = {
  stage: []
}

export default function mapReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TILES':
      return {
        ...action.payload
      }
    default:
      return state
  }
}
