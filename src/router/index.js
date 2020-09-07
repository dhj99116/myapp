import React, { Component } from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import {Home} from './assembly'
export default class router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
              <Route path='/home' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
