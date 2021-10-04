import React from 'react'
import CompanyCard from './CompanyCard'

import { Light, Dark } from 'common/utils/storybookMode'

export default { title: 'CompanyCard' }

export const companyCardLight = () => (
  <Light>
    <CompanyCard />
  </Light>
)

export const companyCardDark = () => (
  <Dark>
    <CompanyCard />
  </Dark>
)
