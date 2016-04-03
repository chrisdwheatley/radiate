export default function (state = {}, action) {
  switch (action.type) {
    case 'poll':
      return {
        ...state,
        [action.id]: {
          res: action.res,
          time: Date.now() / 1000
        }
      }
    default:
      return state
  }
}
