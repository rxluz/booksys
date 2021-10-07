import React from 'react'
import CompanyCard from './CompanyCard'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { addDefaults, addArgTypes } from 'common/utils/storybookMode'

const defaultProps = {}

const addTheme = addDefaults({
  defaultProps,
  figmaURL: 'https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys?node-id=150%3A2',
})

export default {
  title: 'CompanyCard',
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: addArgTypes({
    content: {
      defaultValue: 'This is a CompanyCard',
      type: 'string',
    },
    eventName: {
      defaultValue: 'Coca Day',
      type: 'string',
    },
    eventAddress: {
      defaultValue: 'Grand Canal Dock, Dublin',
      type: 'string',
    },
    eventStartTime: {
      defaultValue: '221342423432',
      type: 'string',
    },
  }),
}

export const CompanyCardOptions = addTheme((props) => (
  <CompanyCard
    event={{
      name: props.eventName,
      eventStartTime: props.eventStartTime,
      address: props.eventAddress,
    }}
    {...props}
  >
    {props.content}
  </CompanyCard>
))
