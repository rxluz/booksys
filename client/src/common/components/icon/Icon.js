import React from 'react'

import Tooltip from 'common/components/tooltip'

import './Icon.scss'

const renderTip = ({ tip, content }) => {
  const hasTip = !!tip
  return hasTip ? (
    <Tooltip title={tip} position="bottom" trigger="mouseenter">
      {content}
    </Tooltip>
  ) : (
    content
  )
}

const Icon = ({
  children: IconElement,
  isActive = false,
  isRound = false,
  onClick = null,
  tip = false,
  addClass = '',
} = {}) => {
  const elements = (
    <i
      className={`icon icon__state--${isActive ? 'active' : 'default'} ${
        onClick !== null && 'icon__state--clickable'
      }   ${isRound && 'icon--round'} ${addClass}`}
      onClick={onClick}
    >
      {isRound ? IconElement : renderTip({ content: IconElement, tip })}
    </i>
  )

  return isRound ? renderTip({ content: elements, tip }) : elements
}

export default Icon
