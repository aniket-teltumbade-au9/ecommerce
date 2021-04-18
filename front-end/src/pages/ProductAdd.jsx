import React, { Component } from 'react'
import { connect } from 'react-redux'
import { brandList } from '../redux/actions/brandAction'
import { categoryList } from '../redux/actions/categoryAction'
import { addProduct } from '../redux/actions/productAction'

class ProductAdd extends Component {
  state = {
    name: null,
    price: null,
    quantity: null,
    brand: null,
    category: null,
    image: null
  }
  componentDidMount = () => {
    this.props.brandList()
    this.props.categoryList()
    if (this.props.catItems) {
      this.setState({ category: this.props.catItems[0] })
    }
    if (this.props.brandItems) {
      this.setState({ brand: this.props.brandItems[0] })
    }
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
    const { name, image, price, quantity, brand, category } = this.state
    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', name)
    formData.append('price', price)
    formData.append('quantity', quantity)
    formData.append('brand', brand)
    formData.append('category', category)
    this.props.addProduct(formData)
  }
  render() {
    return (

      <div className='Register'>
        <form onSubmit={this.handleSubmit}>

          <fieldset>
            <legend>
              Add New Product
            </legend>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={this.handleInput}
            />
            <label htmlFor='price'>Price:</label>
            <input
              type='number'
              id='price'
              name='price'
              pattern="[0-9]+([\.,][0-9]+)?"
              step="0.01"
              onChange={this.handleInput}
            />
            <label htmlFor='quantity'>Quantity:</label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              step="1"
              onChange={this.handleInput}
            />
            <label htmlFor='brand'>Brand:</label>
            <div className="select" >
              <select
                name="brand"
                id="standard-select"
                onChange={this.handleInput}
                style={{ marginBottom: "0" }}>
                {this.props.brandItems ?
                  this.props.brandItems.map(el => <option value={el} >{el}</option>)
                  : <option value="">Empty List</option>}
              </select>
            </div>
            <label htmlFor='category'>Category:</label>
            <div className="select" >
              <select
                name="category"
                id="standard-select"
                onChange={this.handleInput}
                style={{ marginBottom: "0" }}>
                {this.props.catItems ?
                  this.props.catItems.map(el => <option value={el} >{el}</option>)
                  : <option value="">Empty List</option>}
              </select>
            </div>
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
  return {
    ProductAdd: storeState.productState.created_product,
    brandItems: storeState.brandState.brandList,
    catItems: storeState.catState.categoryList
  }
}


export default connect(mapStateToProps, { addProduct, brandList, categoryList })(ProductAdd)
