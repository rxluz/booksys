import React from 'react'

import { Switch, Route } from 'react-router-dom'

const RoutesList = () => (
  <Switch>
    <Route path="*" exact={true}>
      Hello world
    </Route>
  </Switch>
)

export default RoutesList
