import React from 'react'
import * as PropTypes from 'prop-types'

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
  <div className="warning animate__animated animate__fadeIn" role="alert">
    <div className="warning__content">
      {image && (
        <div className="warning__image" role="presentation">
          <img alt={imageAlt} src={image} />
        </div>
      )}
      {title && <div className="warning__title">{title}</div>}
      {description && <div className="warning__description">{description}</div>}
      {footerMessage && <div className="warning__footer-message">{footerMessage}</div>}
    </div>
    {callToActionText && (
      <div className="warning__footer">
        <Button
          styleType={callToActionType}
          className="warning__footer--button"
          onClick={onClickCallToAction}
        >
          {callToActionText}
        </Button>
      </div>
    )}
  </div>
)

Warning.propTypes = {
  image: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  footerMessage: PropTypes.string,
  callToActionText: PropTypes.string,
  callToActionType: PropTypes.oneOf(['primary', 'secondary']),
  onClickCallToAction: PropTypes.func,
}

export default Warning
