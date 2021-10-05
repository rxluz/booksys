import { i18nState } from 'redux-i18n'
import { combineReducers } from 'redux'

import settings from './settings'
import company from './company'
import booking from './booking'

export default combineReducers({
  settings,
  company,
  booking,
  i18nState,
})
