import { setSelector } from 'common/utils/state.utils'

const defaultSettings = () => ({
  darkMode: 'browser',
})

const list = (state) => ({
  SETTINGS_TOGGLE_DARK_MODE: () => ({ ...state, darkMode: !state.darkMode }),
})

export default setSelector(list, defaultSettings())
