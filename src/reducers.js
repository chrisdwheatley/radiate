export default function (state = {}, action) {
  switch (action.type) {
    case 'POLL':
      return {
        ...state,
        [action.id]: {
          res: action.res,
          time: Date.now() / 1000
        }
      }
    case 'RESIZE':
      return {
        ...state,
        width: action.width
      }
    default:
      return state
  }
}
