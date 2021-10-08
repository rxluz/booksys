import React from 'react'
import Button from './Button'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { addDefaults, addArgTypes } from 'common/utils/storybookMode'

const defaultProps = { onClick: action('onClick') }

const addTheme = addDefaults({
  defaultProps,
  figmaURL: 'https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys?node-id=147%3A2',
})

export default {
  title: 'Button',
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: addArgTypes({
    content: {
      defaultValue: 'This is a button',
      type: 'string',
    },
    styleType: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  }),
}

export const ButtonOptions = addTheme((props) => <Button {...props}>{props.content}</Button>)
