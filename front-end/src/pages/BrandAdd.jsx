import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBrand } from '../redux/actions/brandAction'

class BrandAdd extends Component {
  state = {
    name: null,
    image: null
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
    const { name, image } = this.state
    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', name)
    this.props.addBrand(formData)
  }
  render() {
    return (

      <div className='Register'>
        <form onSubmit={this.handleSubmit}>

          <fieldset>
            <legend>
              Add New Brand
            </legend>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={this.handleInput}
            />
            <label htmlFor='image'>Image:</label>
            <input
              type='file'
              name='image'
              id='image'
              onChange={this.handleUpload}
            />
          </fieldset>
          <button type='submit'>Add</button>
        </form>
      </div>

    )
  }
}

const mapStateToProps = (storeState) => {
  return { BrandAdd: storeState.brandState.created_brand }
}


export default connect(mapStateToProps, { addBrand })(BrandAdd)
