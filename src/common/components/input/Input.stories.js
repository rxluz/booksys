import React from 'react'
import InputComponent from './Input'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { addDefaults, addArgTypes } from 'common/utils/storybookMode'

const defaultProps = {
  onChange: action('onChangeInput'),
}

const addTheme = addDefaults({
  defaultProps,
  figmaURL: 'https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys?node-id=157%3A26',
})

export default {
  title: 'Components/Input',

  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: addArgTypes({
    id: {
      defaultValue: '1',
      type: 'string',
    },
    type: {
      defaultValue: 'text',
      options: ['text', 'select'],
      control: { type: 'radio' },
    },

    title: {
      defaultValue: 'Name',
      type: 'string',
    },
    placeholder: {
      defaultValue: 'Put the name',
      type: 'string',
    },
    list: {
      defaultValue: [{ value: 'val', text: 'option text' }],
      type: 'list',
    },
    value: {
      defaultValue: 'value',
      type: 'string',
    },
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    showClearButton: {
      defaultValue: false,
      type: 'boolean',
    },
  }),
}

export const Input = addTheme((props) => <InputComponent {...props} />)
