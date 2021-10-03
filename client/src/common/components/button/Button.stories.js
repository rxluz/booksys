import React from 'react'
import Button from './Button'

import { Light, Dark } from 'common/utils/storybookMode'

export default { title: 'Button' }

export const buttonLight = () => (
  <Light>
    <Button />
  </Light>
)

export const buttonDark = () => (
  <Dark>
    <Button />
  </Dark>
)
