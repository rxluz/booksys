import React, { useState } from 'react'
import Card from 'common/components/card'
import Input from 'common/components/input'
import Button from 'common/components/button'
import { setFieldInitialState, validate } from 'common/utils/general.utils'

const isFormValid = (fields) => Object.values(fields).every(({ isValid }) => isValid)

const CreatePage = ({ translate, seatsAvailable }) => {
  const [name, setName] = useState(setFieldInitialState())
  const [corporateEmail, setCorporateEmail] = useState(setFieldInitialState())
  const [seats, setSeats] = useState(setFieldInitialState())
  const [preferredTime, setPreferredTime] = useState(setFieldInitialState())

  const fields = { name, corporateEmail, seats, preferredTime }

  const seatsData = seatsAvailable.map((seat) => ({
    value: seat,
    text: translate(['{num} seat', '{num} seats'], { num: seat }),
  }))

  return (
    <div>
      <Card>
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
          validation={validate(translate).EMAIL}
          translate={translate}
        />
        <p>{translate('Book your preferences for this event')}</p>
        <Input
          id="seats"
          type="select"
          list={seatsData}
          value={seats.value}
          onChange={setSeats}
          placeholder={translate('Number of seats')}
        />

        <Input
          id="preferredTime"
          type="select"
          list={seatsData}
          value={preferredTime.value}
          onChange={setPreferredTime}
          placeholder={translate('Preferred time')}
        />

        <Button isDisabled={!isFormValid(fields)}>{translate('Continue')}</Button>
      </Card>
    </div>
  )
}

export default CreatePage
