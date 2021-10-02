import { useSelector } from 'react-redux'

import { isDarkMode, isMobileOrTablet } from 'common/utils/browser.utils'

import { detect } from 'detect-browser'

const { body } = document

const addBrowserClasses = () => {
  const normalise = (name) => name.toLowerCase().split(' ').join('-')

  const { name, version, os } = detect()

  body.classList.add(normalise(name))
  body.classList.add(normalise(`${name}-${version}`))
  body.classList.add(normalise(os))
}

const addDarkModeClasses = ({ darkMode = 'browser' } = {}) => {
  const isDarkModeCheck = darkMode === 'browser' ? isDarkMode() : darkMode

  body.classList.remove(`dark-mode`)
  body.classList.remove(`light-mode`)
  body.classList.add(`${isDarkModeCheck ? 'dark' : 'light'}-mode`)
}

const addMobileDesktopClasses = () => {
  body.classList.add(isMobileOrTablet() ? 'mobile-tablet' : 'desktop')
}

const BodyClasses = (props) => {
  const { darkMode = 'browser' } = useSelector((state) => state.settings)

  addDarkModeClasses({ darkMode })
  addMobileDesktopClasses()
  addBrowserClasses()

  return props.children
}

export default BodyClasses
