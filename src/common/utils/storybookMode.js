import React from 'react'
import './storybookMode.scss'

import 'modules/main/Main.scss'

const StorybookMode = (props) => <div className={`${props.mode}-mode`}>{props.children}</div>

export const light = (WrappedComponent) => (
  <StorybookMode mode="light">
    <WrappedComponent />
  </StorybookMode>
)

export const Light = (props) => <StorybookMode mode="light">{props.children}</StorybookMode>
export const Dark = (props) => <StorybookMode mode="dark">{props.children}</StorybookMode>

export const Theme = ({ children, name = 'light' }) =>
  name === 'light' ? <Light>{children}</Light> : <Dark>{children}</Dark>

export const translate = (value) => (Array.isArray(value) ? value[0] : value)

export const addDefaults = ({ defaultProps = {}, figmaURL = null } = {}) => (Component) => {
  const Story = ({ theme, ...props }) => (
    <Theme name={theme}>
      <Component {...defaultProps} {...props} translate={translate} />
    </Theme>
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
    options: ['dark', 'light'],
    control: { type: 'radio' },
  },
  ...argTypes,
})
