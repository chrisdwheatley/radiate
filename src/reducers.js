export default function (state = {}, action) {
  switch (action.type) {
    case 'poll':
      return {
        ...state,
        [action.id]: action.res
      }
    default:
      return state
  }
}
