export const EMAIL_VALIDATION = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const BASE_URL = 'https://29b0050b-7001-4162-994f-acfec6195274.mock.pstmn.io'

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/'

export const MAPS_URL = (address) => `${GOOGLE_MAPS_URL}${address}`

export const BOOKSYS_REPO_URL = 'https://github.com/rxluz/booksys'

export const BOOKSYS_CONSOLE_MESSAGE = `

██████╗      ██████╗      ██████╗     ██╗  ██╗    ███████╗    ██╗   ██╗    ███████╗
██╔══██╗    ██╔═══██╗    ██╔═══██╗    ██║ ██╔╝    ██╔════╝    ╚██╗ ██╔╝    ██╔════╝
██████╔╝    ██║   ██║    ██║   ██║    █████╔╝     ███████╗     ╚████╔╝     ███████╗
██╔══██╗    ██║   ██║    ██║   ██║    ██╔═██╗     ╚════██║      ╚██╔╝      ╚════██║
██████╔╝    ╚██████╔╝    ╚██████╔╝    ██║  ██╗    ███████║       ██║       ███████║
╚═════╝      ╚═════╝      ╚═════╝     ╚═╝  ╚═╝    ╚══════╝       ╚═╝       ╚══════╝

`

export const SENTRY_URL =
  'https://254dd7d42eb4454582f8f5ee626210fb@o1034630.ingest.sentry.io/6001277'
