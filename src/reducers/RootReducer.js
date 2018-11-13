export default function (state = {
  config: {
    email: null,
    token: null
  },
}, action) {
  switch (action.type) {
    case 'CONFIG_CHANGED':
      return {config: action.payload}
  }
  // i dont care about the action because it is not inside my
  // list of actions I am interested int (case statements inside the switch)
  return state
}
