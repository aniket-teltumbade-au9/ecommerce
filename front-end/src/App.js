import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { isLoggedin } from './redux/actions/authAction'

class App extends Component {
  componentDidMount = () => {
    this.props.isLoggedin()
  }
  componentDidUpdate = (prevProps, stateProps) => {
    if (prevProps.logData !== this.props.logData) {
      this.props.isLoggedin()
    }
  }
  render() {
    return this.props.logData === false ? (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    ) : <h1>Hey</h1>
  }
}

const mapStateToProps = (storeState) => {
  return { logData: storeState.authState.isAuth }
}


export default connect(mapStateToProps, { isLoggedin })(App)
