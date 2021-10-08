import * as generalConstants from './general.constants'
import moment from 'moment'
import hash from 'object-hash'

export const emptyFunc = (param) => param

export const onChangeValue = ({ onChange, isValid, valueForced = 'NO', isTouched = false }) => (
  event,
) =>
  onChange({
    value: valueForced !== 'NO' ? valueForced : event.target.value,
    isValid,
    isTouched,
  })

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

export const getPreferredTimeData = (availableTimesAndSeats) =>
  (availableTimesAndSeats || []).reduce(
    (times, { time }) => {
      const now = moment().unix()
      if (now > time) {
        return times
      }

      const hour = moment.unix(time).format(generalConstants.MOMENT_TIME)

      times.push({
        value: time,
        text: hour,
      })

      return times
    },

    [],
  )

export const getSeatsAndTime = (availableTimesAndSeats) =>
  availableTimesAndSeats.reduce(
    (seatsAndTime, { time, seats }) => {
      seats.forEach((seat, index) => {
        seatsAndTime.push({
          id: hash({ seat, time, index }),
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
        text: translate([`One seat`, `{num} seats`], { num: seat }),
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