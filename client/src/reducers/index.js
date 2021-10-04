import { i18nState } from 'redux-i18n'
import { combineReducers } from 'redux'

import settings from './settings'
import company from './company'

export default combineReducers({
  settings,
  company,
  i18nState,
})
