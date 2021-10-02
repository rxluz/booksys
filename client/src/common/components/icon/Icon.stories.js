import React from 'react'
import { FiX, FiAperture } from 'react-icons/fi'

import Icon from './Icon'
import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'Icon' }

const iconElement = ({ isRound = false, isActive = false, element, tip = false } = {}) => (
  <Icon tip={tip} isRound={isRound} isActive={isActive}>
    {element}
  </Icon>
)

export const icon = () => <Light>{iconElement({ element: <FiX /> })}</Light>
export const iconWithTip = () => (
  <Light>{iconElement({ tip: 'hello world', element: <FiAperture /> })}</Light>
)
export const iconActive = () => (
  <Light>{iconElement({ isActive: true, element: <FiAperture /> })}</Light>
)

export const iconActiveWithTip = () => (
  <Light>{iconElement({ tip: 'hello world', isActive: true, element: <FiX /> })}</Light>
)

export const iconDark = () => <Dark>{iconElement({ element: <FiAperture /> })}</Dark>
export const iconDarkWithTip = () => (
  <Dark>{iconElement({ tip: 'hello world', element: <FiAperture /> })}</Dark>
)
export const iconDarkActive = () => (
  <Dark>{iconElement({ isActive: true, element: <FiAperture /> })}</Dark>
)

export const iconDarkWithTipActive = () => (
  <Dark>{iconElement({ tip: 'hello world', isActive: true, element: <FiAperture /> })}</Dark>
)

export const iconRound = () => (
  <Light>{iconElement({ isRound: true, element: <FiX size="30px" /> })}</Light>
)
export const iconWithTipRound = () => (
  <Light>
    {iconElement({ isRound: true, tip: 'hello world', element: <FiAperture size="30px" /> })}
  </Light>
)
export const iconActiveRound = () => (
  <Light>
    {iconElement({ isRound: true, isActive: true, element: <FiAperture size="30px" /> })}
  </Light>
)

export const iconActiveWithTipRound = () => (
  <Light>
    {iconElement({
      isRound: true,
      tip: 'hello world',
      isActive: true,
      element: <FiX size="30px" />,
    })}
  </Light>
)

export const iconDarkRound = () => (
  <Dark>{iconElement({ isRound: true, element: <FiAperture size="30px" /> })}</Dark>
)
export const iconDarkWithTipRound = () => (
  <Dark>
    {iconElement({ isRound: true, tip: 'hello world', element: <FiAperture size="30px" /> })}
  </Dark>
)
export const iconDarkActiveRound = () => (
  <Dark>{iconElement({ isRound: true, isActive: true, element: <FiAperture size="30px" /> })}</Dark>
)

export const iconDarkWithTipActiveRound = () => (
  <Dark>
    {iconElement({
      isRound: true,
      tip: 'hello world',
      isActive: true,
      element: <FiAperture size="30px" />,
    })}
  </Dark>
)
