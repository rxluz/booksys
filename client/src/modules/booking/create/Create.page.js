import React, { useState } from 'react'
import Input from 'common/components/input'
import Button from 'common/components/button'
import * as generalUtils from 'common/utils/general.utils'
import moment from 'moment'
import * as createConstants from './Create.constants'
import Warning from 'common/components/warning'
import SomethingWrongImg from 'common/components/warning/something-wrong.svg'
import EmailImg from 'common/components/warning/email.svg'

import './Create.scss'

const isFormValid = (fields) =>
  Object.values(fields).every(({ value, isValid }) => !!value && isValid)

const getPageState = ({ eventEndTime, showSuccessState }) => {
  const isEventExpired = eventEndTime < moment().unix()

  if (isEventExpired) {
    return createConstants.PAGE_STATE.EXPIRED
  }

  if (showSuccessState) {
    return createConstants.PAGE_STATE.SUCCESS
  }

  return createConstants.PAGE_STATE.FORM
}

const CreatePageWrapper = ({ children }) => (
  <section className="create-page animate__animated animate__fadeIn">{children}</section>
)

const CreatePage = ({
  translate,
  availableTimesAndSeats,
  acceptedDomains,
  onSubmit,
  isSubmitting,
  eventEndTime,
  showSuccessState,
  showInvalidBookingMessage,
  resetFormAction,
}) => {
  const pageState = getPageState({ showSuccessState, eventEndTime })
  const [name, setName] = useState(generalUtils.setFieldInitialState())
  const [corporateEmail, setCorporateEmail] = useState(generalUtils.setFieldInitialState())
  const [seats, setSeats] = useState(generalUtils.setFieldInitialState())
  const [preferredTime, setPreferredTime] = useState(generalUtils.setFieldInitialState())

  const fields = { name, corporateEmail, seats, preferredTime }
  const fieldsValue = Object.keys(fields).reduce((fieldsVal, field) => {
    fieldsVal[field] = fields[field].value

    return fieldsVal
  }, {})

  const isSubmitButtonDisabled = isSubmitting || !isFormValid(fields)

  const resetFormActionInner = () => {
    setSeats(generalUtils.setFieldInitialState())
    setPreferredTime(generalUtils.setFieldInitialState())
    resetFormAction()
  }

  const setCorporateEmailInner = ({ value, ...fields }) =>
    setCorporateEmail({ value: value.trim(), ...fields })

  const PAGES_BY_STATE = {
    [createConstants.PAGE_STATE.SUCCESS]: () => (
      <Warning
        image={EmailImg}
        imageAlt={translate('Email illustration')}
        title={translate('Check your email')}
        description={translate(
          'You are almost there to reserve your room for this event! Please make sure to finish your reservation as soon as possible to avoid losing your booking.',
        )}
        footerMessage={translate("If you can't found the email, check your spam folder.")}
        callToActionType="secondary"
        callToActionText={translate('New booking')}
        onClickCallToAction={resetFormActionInner}
      />
    ),
    [createConstants.PAGE_STATE.LOADING]: () => <div>{translate('Loading...')}</div>,
    [createConstants.PAGE_STATE.EXPIRED]: () => (
      <Warning
        image={SomethingWrongImg}
        imageAlt={translate('Something wrong happened')}
        title={translate('This event has ended')}
      />
    ),

    [createConstants.PAGE_STATE.FORM]: () => (
      <div className="animate__animated animate__fadeIn">
        <div className="create-page__title">
          {translate('Fill in the details below to make your office reservation')}
        </div>
        <form
          aria-label={translate('Office reservation')}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="create-page__content">
            <Input
              translate={translate}
              id="name"
              type="text"
              value={name.value}
              onChange={setName}
              title={translate('Name')}
            />
            <Input
              translate={translate}
              id="corporateEmail"
              type="text"
              value={corporateEmail.value}
              onChange={setCorporateEmailInner}
              title={translate('Corporate email')}
              displayErrors={corporateEmail.isTouched}
              validation={generalUtils.validateEmail(translate, acceptedDomains)}
              translate={translate}
            />

            <Input
              translate={translate}
              id="preferredTime"
              title={translate('Book your preferences for this event')}
              type="select"
              list={generalUtils.getPreferredTimeData(availableTimesAndSeats)}
              value={preferredTime.value}
              onChange={setPreferredTime}
              placeholder={translate('Preferred time')}
            />

            <Input
              translate={translate}
              id="seats"
              type="select"
              disabled={preferredTime.value === ''}
              list={generalUtils.getSeatsList({ preferredTime, availableTimesAndSeats, translate })}
              value={seats.value}
              onChange={setSeats}
              placeholder={translate('Number of seats')}
              displayErrors={showInvalidBookingMessage}
              validation={{
                test: () => !showInvalidBookingMessage,
                message: () => translate('Your booking preferences has changed'),
              }}
            />
          </div>

          <div className="create-page__footer">
            <Button
              onClick={() => !isSubmitButtonDisabled && onSubmit(fieldsValue)}
              isDisabled={isSubmitButtonDisabled}
            >
              {isSubmitting ? translate('Please wait ...') : translate('Continue')}
            </Button>
          </div>
        </form>
      </div>
    ),
  }

  return <CreatePageWrapper>{PAGES_BY_STATE[pageState]()}</CreatePageWrapper>
}

export default CreatePage
