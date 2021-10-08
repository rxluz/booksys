import React from 'react'
import LoadingImg from 'modules/main/loading.svg'

const Loading = ({ translate }) => (
  <div role="status" aria-live="polite">
    <img alt={translate('Please wait ...')} src={LoadingImg} />
  </div>
)

export default Loading
