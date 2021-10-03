export const setSelector = (selectors, defaultState = {}) => (state = defaultState, action) =>
  selectors(state)[action.type] ? selectors(state)[action.type](state, action) : state

export const action = (name) => (value = '') => (dispatch) =>
  dispatch({
    type: name,
    value,
  })
