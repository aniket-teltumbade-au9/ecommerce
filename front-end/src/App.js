import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Brand from './components/Brand'
import Product from './components/Product'
import Category from './components/Category'
import Login from './pages/Login'
import Register from './pages/Register'
import UserList from './pages/UserList'
import { isLoggedin } from './redux/actions/authAction'
import { userLogout } from './redux/actions/authAction'


class App extends Component {
  componentDidMount = () => {
    this.props.isLoggedin()
  }
  handleLogout = () => {
    this.props.userLogout()
  }
  componentDidUpdate = (prevProps, stateProps) => {
    if (prevProps.logStatus !== this.props.logStatus) {
      this.props.isLoggedin()
    }
  }
  render() {
    return this.props.logStatus === false ? (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    ) : (
      this.props.logData ?
        this.props.logData.msg.type === "Admin" ? (<>
          <BrowserRouter>
            <Navbar userData={this.props.logData} menuData={
              [
                {
                  link: '/',
                  type: 'Home'
                },
                {
                  link: '/categories',
                  type: 'Categories'
                },
                {
                  link: '/brands',
                  type: 'Brands'
                }
              ]} logout={this.handleLogout} />
            <Switch>
              <Route exact path="/categories" component={Category} />
              <Route exact path="/brands" component={Brand} />
              <Route exact path="/" component={UserList} />
              <Redirect from="*" to="/" />
            </Switch>
          </BrowserRouter>
        </>)
          : this.props.logData.msg.type === "Vendor" ? (<>
            <BrowserRouter>
              <Navbar userData={this.props.logData} menuData={
                [
                  {
                    link: '/',
                    type: 'Home'
                  },
                  {
                    link: '/products',
                    type: 'Products'
                  },
                  {
                    link: '/orders',
                    type: 'Orders'
                  }
                ]} logout={this.handleLogout} />
              <Switch>
                <Route exact path="/categories" component={Category} />
                <Route exact path="/brands" component={Brand} />
                <Route exact path="/" component={Product} />
                <Redirect from="*" to="/" />
              </Switch>
            </BrowserRouter>
          </>)
            : <h1>Loading...</h1>

        : <h1>Loading...</h1>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    logStatus: storeState.authState.isAuth,
    logData: storeState.authState.userProfile
  }
}


export default connect(mapStateToProps, { isLoggedin, userLogout })(App)
