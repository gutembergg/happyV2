import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Landing from '../pages/Landing'
import Map from '../pages/Map'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/map" component={Map} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
