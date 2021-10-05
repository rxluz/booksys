import React from 'react'

import Button from 'common/components/button'
import './Warning.scss'

const Warning = ({
  image,
  imageAlt,
  title,
  description,
  footerMessage,
  callToActionText,
  callToActionType,
  onClickCallToAction,
}) => (
  <div className="warning animate__animated animate__fadeIn">
    {image && (
      <div className="warning__image">
        <img alt={imageAlt} src={image} />
      </div>
    )}
    {title && <div className="warning__title">{title}</div>}
    {description && <div className="warning__description">{description}</div>}
    {footerMessage && <div className="warning__footer-message">{footerMessage}</div>}
    {callToActionText && (
      <Button
        type={callToActionType}
        className="warning__footer-message"
        onClick={onClickCallToAction}
      >
        {callToActionText}
      </Button>
    )}
  </div>
)

export default Warning
