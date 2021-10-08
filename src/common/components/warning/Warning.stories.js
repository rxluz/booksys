import React from 'react'
import Warning from './Warning'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { addDefaults, addArgTypes } from 'common/utils/storybookMode'
import EmailImg from 'common/components/warning/email.svg'

const defaultProps = { onClickCallToAction: action('onClickCallToAction') }

const addTheme = addDefaults({
  defaultProps,
  figmaURL: 'https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys?node-id=167%3A55',
})

export default {
  title: 'Warning',
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: addArgTypes({
    imageAlt: {
      defaultValue: 'image description',
      type: 'string',
    },
    title: {
      defaultValue: 'Warning title',
      type: 'string',
    },
    description: {
      defaultValue: 'Warning description',
      type: 'string',
    },
    footerMessage: {
      defaultValue: 'Footer message',
      type: 'string',
    },
    callToActionText: {
      defaultValue: 'Call to action text',
      type: 'string',
    },
    callToActionType: {
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  }),
}

export const WarningOptions = addTheme((props) => <Warning image={EmailImg} {...props} />)
