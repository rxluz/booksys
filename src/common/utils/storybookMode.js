import React from 'react'
import './storybookMode.scss'

import 'modules/main/Main.scss'

export const ThemeDevice = ({ children, theme = 'light', device = 'desktop' }) => (
  <div className={`${theme}-mode ${device}`}>{children}</div>
)

export const translate = (value) => (Array.isArray(value) ? value[0] : value)

export const addDefaults = ({ defaultProps = {}, figmaURL = null } = {}) => (Component) => {
  const Story = ({ theme, device, ...props }) => (
    <ThemeDevice theme={theme} device={device}>
      <Component {...defaultProps} {...props} translate={translate} />
    </ThemeDevice>
  )

  if (figmaURL) {
    Story.parameters = {
      design: {
        type: 'figma',
        url: figmaURL,
      },
    }
  }
  return Story
}

export const addArgTypes = (argTypes) => ({
  theme: {
    defaultValue: 'light',
    options: ['dark', 'light'],
    control: { type: 'radio' },
  },
  device: {
    defaultValue: 'desktop',
    options: ['mobile-tablet', 'desktop'],
    control: { type: 'radio' },
  },
  ...argTypes,
})
