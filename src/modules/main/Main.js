import React from 'react'

import * as PropTypes from 'prop-types'
import './Main.scss'
import 'react-tippy/dist/tippy.css'
import { Switch, Route } from 'react-router-dom'

import BackgroundImg from './background.png'
import LogoImg from './logo.svg'

import RoutesList from 'common/routes/RoutesList'
import BodyClasses from 'modules/main/BodyClasses'
import Company from 'modules/company/Company'
import * as generalConstants from 'common/utils/general.constants'
import NotFound from 'modules/main/NotFound'

const Main = (_, { t: translate }) => (
  <BodyClasses>
    <div className="app" style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className="app__logo">
        <a href={generalConstants.BOOKSYS_REPO_URL}>
          <img src={LogoImg} href alt={translate('Booksys logo')} />
        </a>
      </div>

      <Switch>
        <Route path="/:companyHash">
          <Company>
            <RoutesList />
          </Company>
        </Route>

        <Route>
          <NotFound translate={translate} />
        </Route>
      </Switch>
    </div>
  </BodyClasses>
)

Main.defaultProps = {
  translate: (value) => value,
}

Main.contextTypes = {
  t: PropTypes.func,
}

export default Main
