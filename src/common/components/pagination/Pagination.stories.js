import React from 'react'
import PaginationComponent from './Pagination'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { addDefaults, addArgTypes } from 'common/utils/storybookMode'

const defaultProps = { onPageChange: action('onClickCallToAction') }

const addTheme = addDefaults({
  defaultProps,
  figmaURL: 'https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys?node-id=168%3A79',
})

export default {
  title: 'Components/Pagination',
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: addArgTypes({
    current: {
      defaultValue: 1,
      type: 'number',
    },
    total: {
      defaultValue: 10,
      type: 'number',
    },
  }),
}

export const Pagination = addTheme((props) => <PaginationComponent {...props} />)
