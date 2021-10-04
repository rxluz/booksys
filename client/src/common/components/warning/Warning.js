import React from 'react'

import Button from 'common/components/button'
import './Warning.scss'

const Warning = ({
  image,
  title,
  description,
  footerMessage,
  callToActionText,
  onClickCallToAction,
}) => (
  <div className="warning">
    {image && (
      <div className="warning__image">
        <img src={image} />
      </div>
    )}
    {title && <div className="warning__title">{title}</div>}
    {description && <div className="warning__description">{description}</div>}
    {footerMessage && <div className="warning__footer-message">{footerMessage}</div>}
    {callToActionText && (
      <Button className="warning__footer-message" onClick={onClickCallToAction}>
        {callToActionText}
      </Button>
    )}
  </div>
)

export default Warning
