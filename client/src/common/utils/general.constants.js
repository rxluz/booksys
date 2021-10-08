export const EMAIL_VALIDATION = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const BASE_URL = 'https://29b0050b-7001-4162-994f-acfec6195274.mock.pstmn.io'

export const MOMENT_DAY_MONTH = 'Do MMM | ddd'
export const MOMENT_DAY_MONTH_ACCESSIBLE = 'Do MMMM, dddd'
export const MOMENT_TIME = 'h A'

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/'

export const MAPS_URL = (address) => `${GOOGLE_MAPS_URL}${address}`
