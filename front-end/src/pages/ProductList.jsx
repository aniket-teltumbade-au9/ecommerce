import React, { Component } from 'react'
import { connect } from 'react-redux'
import { productActivation, productList } from '../redux/actions/productAction'
import '../scss/Table.scss'

class ProductList extends Component {
  componentDidMount = () => {
    this.props.productList()
  }
  handleSelect = (name, e) => {
    const status = e.target.value === "Active" ? true : false
    console.log(name, status)
    this.props.productActivation(name, status)
  }
  componentDidUpdate = (prevProps, stateProps) => {
    if (JSON.stringify(prevProps.allProducts) !== JSON.stringify(this.props.allProducts)) {
      this.props.productList()
    }
  }
  render() {
    return (
      <div className="categoryList">
        <div className="header">Products</div>

        <table cellSpacing="0">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.allProducts ?
                this.props.allProducts.map((el, index) =>
                  <tr key={index}>
                    <td><img src={`${el.image}`} alt="" /></td>
                    <td>{el.name}</td>
                    <td >
                      <div className="select" style={{ margin: "auto" }}>
                        <select
                          name="status"
                          defaultValue={el.status === true ? "Active" : "Deactive"}
                          id="standard-select"
                          onChange={(e) => this.handleSelect(el.name, e)}>
                          <option value="Active" >Active</option>
                          <option value="Deactive" >Deactive</option>
                        </select>
                      </div>
                    </td>
                  </tr>)
                :
                null
            }
          </tbody>
        </table>
        <pre>
        </pre>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return { allProducts: storeState.productState.productList }
}

export default connect(mapStateToProps, { productList, productActivation })(ProductList)
