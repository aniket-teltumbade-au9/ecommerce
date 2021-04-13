import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userRegister } from '../redux/actions/authAction'
import '../scss/Register.scss'
import { Link } from 'react-router-dom'
import FormData from 'form-data'
import fs from 'fs'

class Register extends Component {
  state = {
    name: null,
    email: null,
    bio: null,
    password: null,
    image: null,
    type: 'Vendor'
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }
  handleUpload = e => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { name, email, bio, password, image, type } = this.state
    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('bio', bio)
    formData.append('type', type)
    formData.append('password', password)
    this.props.userRegister(formData)
  }
  render() {
    return (
      <div className='Register'>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to='/login'>Already A Member! Login here!</Link>
          </div>

          <fieldset>
            <legend>
              <span className='number'>1</span>Your basic info
            </legend>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={this.handleInput}
            />

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

            <label>Role:</label>
            <input
              type='radio'
              id='Vendor'
              value='Vendor'
              name='type'
              defaultChecked={true}
              onChange={(e) => this.handleInput(e)}
            />
            <label htmlFor='Vendor' className='light'>
              Vendor
            </label>
            <br />
            <input
              type='radio'
              id='User'
              value='User'
              name='type'
              onChange={(e) => this.handleInput(e)}
            />
            <label htmlFor='User' className='light'>
              Customer
            </label>
          </fieldset>

          <fieldset>
            <legend>
              <span className='number'>2</span>Your profile
            </legend>
            <label htmlFor='bio'>Biography:</label>
            <textarea
              id='bio'
              name='bio'
              onChange={this.handleInput}
            ></textarea>
          </fieldset>
          <fieldset>
            <label htmlFor='image'>Profile:</label>
            <input
              type='file'
              name='image'
              id='image'
              onChange={this.handleUpload}
            />
          </fieldset>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { userRegister })(Register)
