import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogin } from '../redux/actions/authAction'
import '../scss/Register.scss'

class Login extends Component {
  state = {
    email: null,
    password: null
  }
  handleInput = e => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.userLogin({ email, password })
  }
  render() {
    return (
      <div className='Register'>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to='/'>Not Registered yet! Register here!</Link>
          </div>
          <fieldset>
            <label htmlFor='mail'>Email:</label>
            <input
              type='email'
              id='mail'
              name='email'
              onChange={this.handleInput}
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={this.handleInput}
            />
          </fieldset>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { userLogin })(Login)
