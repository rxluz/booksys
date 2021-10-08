import React from 'react'
import OfficeCardComponent from './OfficeCard'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { addDefaults, addArgTypes } from 'common/utils/storybookMode'

const defaultProps = { onBook: action('onBook') }

const addTheme = addDefaults({
  defaultProps,
  figmaURL: 'https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys?node-id=157%3A38',
})

export default {
  title: 'Components/OfficeCard',
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: addArgTypes({
    time: {
      defaultValue: '21372153',
      type: 'string',
    },
    seat: {
      defaultValue: 'C1',
      type: 'string',
    },
  }),
}

export const OfficeCard = addTheme((props) => <OfficeCardComponent {...props} />)
