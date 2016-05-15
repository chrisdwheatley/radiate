export function poll(id, res) {
  return {
    type: 'POLL',
    id,
    res
  }
}

export function resize (width) {
  return {
    type: 'RESIZE',
    width
  }
}
