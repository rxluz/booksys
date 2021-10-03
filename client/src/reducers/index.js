import { i18nState } from 'redux-i18n'
import { combineReducers } from 'redux'

import settings from './settings'

export default combineReducers({
  settings,
  i18nState,
})
