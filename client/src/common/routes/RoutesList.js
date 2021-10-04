import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Create from 'modules/create/Create'
import Booking from 'modules/booking/Booking'
import Change from 'modules/change/Change'
import Status from 'modules/status/Status'

const RoutesList = () => (
  <Switch>
    <Route path="/:companyHash" exact={true}>
      <Create />
    </Route>

    <Route path="/:companyHash/booking/:bookingId" exact={true}>
      <Booking />
    </Route>

    <Route path="/:companyHash/booking/:bookingId/status" exact={true}>
      <Status />
    </Route>

    <Route path="/:companyHash/booking/:bookingId/change" exact={true}>
      <Change />
    </Route>

    <Route path="*" exact={true}>
      Sorry this page doesn't exists
    </Route>
  </Switch>
)

export default RoutesList
