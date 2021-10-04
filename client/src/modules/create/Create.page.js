import React, { useState } from 'react'
import Input from 'common/components/input'
import Button from 'common/components/button'
import { setFieldInitialState, validate } from 'common/utils/general.utils'
import moment from 'moment'
import * as createConstants from './Create.constants'
import Warning from 'common/components/warning'
import EmailImg from 'common/components/warning/email.svg'

import './Create.scss'

const isFormValid = (fields) =>
  Object.values(fields).every(({ value, isValid }) => !!value && isValid)

const getPreferredTimeData = (availableTimesAndSeats) =>
  availableTimesAndSeats.reduce(
    (times, { time }) => {
      const now = moment().unix()
      if (now > time) {
        return times
      }

      const hour = moment.unix(time).format('h A')

      times.push({
        value: time,
        text: hour,
      })

      return times
    },

    [],
  )

const getSeatsByTime = (availableTimesAndSeats, translate) =>
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

const validateEmail = (translate, acceptedDomains) => ({
  test: (emailAddress) =>
    validate(translate).EMAIL.test(emailAddress) &&
    acceptedDomains.some((domain) => emailAddress.split('@')[1] === domain),
  message: (emailAddress) =>
    !validate(translate).EMAIL.test(emailAddress)
      ? validate(translate).EMAIL.message(emailAddress)
      : translate('This email is not acceptable, please make sure to use your corporate email'),
})

const getPageState = (eventEndTime) =>
  eventEndTime > moment().unix()
    ? createConstants.PAGE_STATE.FORM
    : createConstants.PAGE_STATE.EXPIRED

const CreatePage = ({
  translate,
  availableTimesAndSeats,
  acceptedDomains,
  onSubmit,
  isSubmitting,
  eventEndTime,
  showInvalidBookingMessage,
}) => {
  console.log({ showInvalidBookingMessage })
  const pageState = getPageState(eventEndTime)
  const [name, setName] = useState(setFieldInitialState())
  const [corporateEmail, setCorporateEmail] = useState(setFieldInitialState())
  const [seats, setSeats] = useState(setFieldInitialState())
  const [preferredTime, setPreferredTime] = useState(setFieldInitialState())

  const fields = { name, corporateEmail, seats, preferredTime }
  const fieldsValue = Object.keys(fields).reduce((fieldsVal, field) => {
    fieldsVal[field] = fields[field].value

    return fieldsVal
  }, {})

  const preferredTimeData = getPreferredTimeData(availableTimesAndSeats)

  const seatsList = preferredTime.value
    ? getSeatsByTime(availableTimesAndSeats, translate)[preferredTime.value]
    : []

  const isSubmitButtonDisabled = isSubmitting || !isFormValid(fields)

  const PAGES_BY_STATE = {
    [createConstants.PAGE_STATE.LOADING]: () => <div>{translate('Loading...')}</div>,
    [createConstants.PAGE_STATE.EXPIRED]: () => (
      <Warning image={EmailImg} title={translate('This event has ended')} />
    ),

    [createConstants.PAGE_STATE.FORM]: () => (
      <section className="create-page">
        <div className="create-page__title">
          {translate('Fill in the details below to make your office reservation')}
        </div>
        <Input
          id="name"
          type="text"
          value={name.value}
          onChange={setName}
          title={translate('Name')}
        />
        <Input
          id="corporateEmail"
          type="text"
          value={corporateEmail.value}
          onChange={setCorporateEmail}
          title={translate('Corporate email')}
          displayErrors={corporateEmail.isTouched}
          validation={validateEmail(translate, acceptedDomains)}
          translate={translate}
        />

        <Input
          id="preferredTime"
          title={translate('Book your preferences for this event')}
          type="select"
          list={preferredTimeData}
          value={preferredTime.value}
          onChange={setPreferredTime}
          placeholder={translate('Preferred time')}
        />

        <Input
          id="seats"
          type="select"
          disabled={preferredTime.value === ''}
          list={seatsList}
          value={seats.value}
          onChange={setSeats}
          placeholder={translate('Number of seats')}
          displayErrors={showInvalidBookingMessage}
          validation={{
            test: () => !showInvalidBookingMessage,
            message: () => translate('Your booking preferences has changed'),
          }}
        />

        <Button
          onClick={() => !isSubmitButtonDisabled && onSubmit(fieldsValue)}
          isDisabled={isSubmitButtonDisabled}
        >
          {isSubmitting ? translate('Please wait ...') : translate('Continue')}
        </Button>
      </section>
    ),
  }

  return PAGES_BY_STATE[pageState]()
}

export default CreatePage
