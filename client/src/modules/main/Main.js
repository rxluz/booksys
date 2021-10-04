import React from 'react'

import * as PropTypes from 'prop-types'
import './Main.scss'
import 'react-tippy/dist/tippy.css'
import { Route } from 'react-router-dom'

import BackgroundImage from './background.png'

import RoutesList from 'common/routes/RoutesList'
import BodyClasses from 'modules/main/BodyClasses'
import Company from 'modules/company/Company'

const Main = (_props, context) => {
  return (
    <BodyClasses>
      <div className="app" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <Route path="/:companyHash">
          <Company>
            <RoutesList />
          </Company>
        </Route>
      </div>
    </BodyClasses>
  )
}

Main.contextTypes = {
  t: PropTypes.func,
}

export default Main
