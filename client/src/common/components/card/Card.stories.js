import React from 'react'
import HelloWorld from './Card'

import { Light, Dark } from 'common/utils/storybookMode'

export default { title: 'Card' }

export const cardLight = () => (
  <Light>
    <HelloWorld />
  </Light>
)

export const cardDark = () => (
  <Dark>
    <HelloWorld />
  </Dark>
)
