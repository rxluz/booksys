import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Create from 'modules/booking/create/Create'
import Booking from 'modules/booking/Booking'

const RoutesList = () => (
  <Switch>
    <Route path="/:companyHash" exact={true}>
      <Create />
    </Route>

    <Route path="/:companyHash/booking/:bookingId">
      <Booking />
    </Route>

    <Route path="*" exact={true}>
      Sorry this page doesn't exists
    </Route>
  </Switch>
)

export default RoutesList
