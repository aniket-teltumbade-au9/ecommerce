import React, { Component } from 'react'
import { connect } from 'react-redux'
import { productList } from '../redux/actions/productAction'
import '../scss/Landing.scss'

class Landing extends Component {
  componentDidMount = () => {
    this.props.productList()
  }
  render() {
    return this.props.allProducts ? (
      <div className="Landing">
        <div className="gallery">
          {this.props.allProducts.map(el =>
            <div class="content">
              <img src={el.image} />
              <h3>{el.name}</h3>
              <p>{el.user}</p>
              <h6>{el.price}</h6>
              <button class="buy-1">Buy Now</button>
            </div>)
          }

        </div>

      </div>
    ) : <h1>Loading...</h1>
  }
}

const mapStateToProps = (storeState) => {
  return { allProducts: storeState.productState.productList }
}

export default connect(mapStateToProps, { productList })(Landing)
