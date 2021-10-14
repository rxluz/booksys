import * as generalConstants from './general.constants'

export const emptyFunc = (param) => param

export const unix = () => Math.round(+new Date() / 1000)

export const onChangeValue = ({ onChange, isValid, valueForced = 'NO', isTouched = false }) => (
  event,
) =>
  onChange({
    value: valueForced !== 'NO' ? valueForced : event.target.value,
    isValid,
    isTouched,
  })

export const getParamURL = (param) =>
  window.location.search.split(`${param}=`)[1]
    ? window.location.search.split(`${param}=`)[1]
    : false

export const detectBrowserLanguage = () => {
  const forcedLang = getParamURL('lang')

  const browserLang =
    (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage

  return forcedLang || browserLang
}

export const setFieldInitialState = (isValid = true, value = '') => ({
  value,
  isValid,
  isTouched: false,
})

const validate = (translate) => ({
  EMAIL: {
    test: (email) => generalConstants.EMAIL_VALIDATION.test(String(email).toLowerCase()),
    message: () => translate('Your email looks incorrect'),
  },
})

export const getSeatsAndTime = (availableTimesAndSeats) =>
  availableTimesAndSeats.reduce(
    (seatsAndTime, { time, seats }) => {
      seats.forEach((seat, index) => {
        seatsAndTime.push({
          id: `${time}-${seat}-${index}`,
          seat,
          time,
        })
      })

      return seatsAndTime
    },

    [],
  )

export const getSeatsByTime = (availableTimesAndSeats, translate) =>
  availableTimesAndSeats.reduce(
    (seatsDict, { time, seats }) => {
      seatsDict[time] = seats.map((seat) => ({
        value: seat,
        text: seat === 1 ? translate('One seat') : translate(`{num} seats`, { num: seat }),
      }))

      return seatsDict
    },

    {},
  )

export const validateEmail = (translate, acceptedDomains) => ({
  test: (emailAddress) =>
    validate(translate).EMAIL.test(emailAddress) &&
    acceptedDomains.some((domain) => emailAddress.split('@')[1] === domain),
  message: (emailAddress) =>
    !validate(translate).EMAIL.test(emailAddress)
      ? validate(translate).EMAIL.message(emailAddress)
      : translate('This email is not acceptable, please make sure to use your corporate email'),
})

export const getSeatsList = ({ preferredTime, availableTimesAndSeats, translate }) =>
  preferredTime.value ? getSeatsByTime(availableTimesAndSeats, translate)[preferredTime.value] : []

export const filterByPage = ({ items, itemsPerPage, page }) =>
  items.slice((page - 1) * itemsPerPage, page * itemsPerPage)

export const removeEmptyObjValues = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([_, value]) => Boolean(value)))

export const formattedDate = (unixTime) => {
  const date = new Date(unixTime * 1000)
  const options = { weekday: 'short', day: 'numeric', month: 'short' }
  return date.toLocaleDateString(detectBrowserLanguage(), options)
}

export const formattedRoundHour = (unixTime) => {
  const date = new Date(unixTime * 1000)
  return `${date.getHours()}:00`
}

export const accessibleFormattedDate = (unixTime) => {
  const date = new Date(unixTime * 1000)
  const options = { weekday: 'long', day: 'numeric', month: 'long' }
  return date.toLocaleDateString(detectBrowserLanguage(), options)
}

const timeToNum = (time) => time.split(':').join('')

export const getPreferredTimeData = (availableTimesAndSeats) =>
  (availableTimesAndSeats || [])
    .reduce(
      (times, { time }) => {
        const now = unix()
        if (now > time) {
          return times
        }

        const hour = formattedRoundHour(time)

        times.push({
          value: time,
          text: hour,
        })

        return times
      },

      [],
    )
    .sort((a, b) => timeToNum(a.text) - timeToNum(b.text))
