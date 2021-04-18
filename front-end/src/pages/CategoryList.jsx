import React, { Component } from 'react'
import { connect } from 'react-redux'
import { categoryActivation, categoryList } from '../redux/actions/categoryAction'
import '../scss/Table.scss'

class CategoryList extends Component {
  componentDidMount = () => {
    this.props.categoryList()
  }
  handleSelect = (name, e) => {
    const status = e.target.value === "Active" ? true : false
    console.log(name, status)
    this.props.categoryActivation(name, status)
  }
  componentDidUpdate = (prevProps, stateProps) => {
    if (JSON.stringify(prevProps.allcategories) !== JSON.stringify(this.props.allcategories)) {
      this.props.categoryList()
    }
  }
  render() {
    return (
      <div className="categoryList">
        <div className="header">Categories</div>

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
              this.props.allcategories ?
                this.props.allcategories.map((el, index) =>
                  <tr key={index}>
                    <td><img src={`${el.image}`} alt="" /></td>
                    <td>{el.name}</td>
                    <td >
                      <div className="select" style={{ margin: "auto" }}>
                        <select
                          name="status"
                          value={el.status === true ? "Active" : "Deactive"}
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
  return { allcategories: storeState.catState.categoryList }
}

export default connect(mapStateToProps, { categoryList, categoryActivation })(CategoryList)
