import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActivation, userList } from '../redux/actions/adminAction'
import '../scss/UserList.scss'

class UserList extends Component {
  componentDidMount = () => {
    this.props.userList()
  }
  handleSelect = (email, e) => {
    const status = e.target.value === "Active" ? true : false
    console.log(email, status)
    this.props.userActivation(email, status)
  }
  componentDidUpdate = (prevProps, stateProps) => {
    if (JSON.stringify(prevProps.allUsers) !== JSON.stringify(this.props.allUsers)) {
      this.props.userList()
    }
  }
  render() {
    return (
      <div className="UserList">
        <div className="header">Users</div>

        <table cellspacing="0">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
          {
            this.props.allUsers ?
              this.props.allUsers.map(el =>
                <tr>
                  <td><img src={`${el.image}`} alt="" /></td>
                  <td>{el.name}</td>
                  <td>{el.email} </td>
                  <td>{el.type} </td>
                  <td>
                    <div className="select">
                      <select
                        name="status"
                        defaultValue={el.status === true ? "Active" : "Deactive"}
                        id="standard-select"
                        onChange={(e) => this.handleSelect(el.email, e)}>
                        <option value="Active" >Active</option>
                        <option value="Deactive" >Deactive</option>
                      </select>
                    </div>
                  </td>
                </tr>)
              :
              null
          }
        </table>
        <pre>
        </pre>
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return { allUsers: storeState.adminState.userList }
}

export default connect(mapStateToProps, { userList, userActivation })(UserList)
