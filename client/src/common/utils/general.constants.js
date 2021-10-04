export const EMAIL_VALIDATION = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const BASE_URL = 'https://29b0050b-7001-4162-994f-acfec6195274.mock.pstmn.io'

export const MOMENT_DAY_MONTH = 'Do MMM | ddd'

const GOOGLE_MAPS_URL = 'https://googlemaps.googleapis.com/maps?q='

export const MAPS_URL = (address) => `${GOOGLE_MAPS_URL}${address}`
