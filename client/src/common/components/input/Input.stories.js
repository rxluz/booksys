import React from 'react'
import HelloWorld from './Input'

import { Light, Dark } from 'common/utils/storybookMode'

export default { title: 'Input' }

export const inputLight = () => (
  <Light>
    <HelloWorld />
  </Light>
)

export const inputDark = () => (
  <Dark>
    <HelloWorld />
  </Dark>
)
