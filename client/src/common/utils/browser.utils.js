import isMobile from 'is-mobile'

const isDarkMode = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const isMobileOrTablet = () => isMobile({ tablet: true })

export { isDarkMode, isMobileOrTablet }
