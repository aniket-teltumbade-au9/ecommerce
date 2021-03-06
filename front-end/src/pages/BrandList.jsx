import React, { Component } from 'react'
import { connect } from 'react-redux'
import { brandActivation, brandList } from '../redux/actions/brandAction'
import '../scss/Table.scss'

class BrandList extends Component {
  componentDidMount = () => {
    this.props.brandList()
  }
  handleSelect = (name, e) => {
    const status = e.target.value === "Active" ? true : false
    console.log(name, status)
    this.props.brandActivation(name, status)
  }
  componentDidUpdate = (prevProps, stateProps) => {
    if (JSON.stringify(prevProps.allBrands) !== JSON.stringify(this.props.allBrands)) {
      this.props.brandList()
    }
  }
  render() {
    return (
      <div className="categoryList">
        <div className="header">Brands</div>

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
              this.props.allBrands ?
                this.props.allBrands.map((el, index) =>
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
  return { allBrands: storeState.brandState.brandList }
}

export default connect(mapStateToProps, { brandList, brandActivation })(BrandList)
