import React from 'react'
import moment from 'moment'
import { FiStar, FiClock } from 'react-icons/fi'
import Tooltip from 'common/components/tooltip'
import Chip from 'common/components/chip'
import ChipsDisplay from 'common/components/chipsDisplay'
import COLOURS from 'common/utils/colours.constants'
import './Card.scss'
import { emptyFunc } from 'common/utils/general.utils'
import { isMobileOrTablet } from 'common/utils/browser.utils'

const getFixedIcons = ({ isStarred, dueDate, translate }) => {
  const hasDueDate = !!dueDate

  const humanDueDate = `${translate(
    'Due',
    {},
    'Icon that indicates that the note is starred',
  )} ${getRelativeDate({ dueDate })}`

  if (isStarred || hasDueDate) {
    return (
      <div className="card__icons">
        {isStarred && (
          <div className="card__icons__item">
            <Tooltip
              title={translate(
                'This note is starred',
                {},
                'Icon that indicates that the note is starred',
              )}
              position="bottom"
              trigger="mouseenter"
            >
              <FiStar size="15px" />
            </Tooltip>
          </div>
        )}
        {hasDueDate && (
          <div className="card__icons__item">
            <Tooltip title={humanDueDate} position="bottom" trigger="mouseenter">
              <FiClock size="15px" />
            </Tooltip>
          </div>
        )}
      </div>
    )
  }

  return ''
}

const getRelativeDate = ({ dueDate }) => moment(dueDate).fromNow()

const buildTags = ({ tags, translate }) =>
  tags.map((tag) => (
    <Chip key={tag} translate={translate}>
      {tag}
    </Chip>
  ))

const getTagsList = ({ tags, width, translate }) => {
  const hasTags = tags.length > 0

  if (hasTags) {
    return (
      <ChipsDisplay
        addClass="card__tags"
        showMore={false}
        width={`calc(100% - 40px)`}
        translate={translate}
      >
        {buildTags({ tags, translate })}
      </ChipsDisplay>
    )
  }

  return ''
}

const Card = ({
  onClick = emptyFunc,
  isStarred = false,
  title = '',
  content = '',
  tags = [],
  dueDate = '',
  colour = 'default',
  width = isMobileOrTablet() ? '100%' : '300px',
  translate = (text) => text,
} = {}) => {
  const [isHover, setIsHover] = React.useState(false)

  const isColourValid = colour !== 'default' && COLOURS.includes(colour)

  const hasTitle = !!title
  const hasContent = !!content

  return (
    <dl
      onClick={onClick}
      className={`card card__state--${isHover ? 'active' : 'default'}`}
      onMouseEnter={() => setIsHover(true)}
      style={{ width, paddingBottom: isColourValid && '10px' }}
      onMouseLeave={() => setIsHover(false)}
    >
      {hasTitle && <dt className="card__title">{title}</dt>}
      {getFixedIcons({ isStarred, dueDate, translate })}
      {hasContent && <dd className="card__content">{content}</dd>}
      {isColourValid && <div className={`card__colour ${colour}-bg`} />}
      {getTagsList({ tags, width })}
    </dl>
  )
}

export default Card
