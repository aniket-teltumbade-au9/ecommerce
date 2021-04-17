import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Navbar.scss'

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <div className="site-header__start">
            <Link to="/" className="brand">Brand</Link>
          </div>
          <div className="site-header__middle">
            <nav className="nav">
              <button className="nav__toggle"
                onClick={() => setToggle(!toggle)}
                aria-expanded="false"
                type="button"
                style={{
                  minHeight: "8vh",
                  minWidth: "8vh",
                  backgroundImage: `url(https://img.icons8.com/carbon-copy/40/000000/menu.png)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
              </button>
              <ul className="nav__wrapper" className={`nav__wrapper ${toggle ? "active" : null}`}>
                {props.menuData.map((el, index) =>
                  <li className="nav__item" key={index}><Link to={el.link}>{el.type}</Link></li>
                )}
              </ul>
            </nav>
          </div>
          <div className="site-header__end">
            <div
              className="profile"
              style={{
                display: 'flex',
                alignItems: "center"
              }}
              onClick={props.logout}>
              <div className="profile-pic"
                style={{ backgroundImage: `url(${props.userData.msg.image})` }}>
              </div>
              <div className="profile-name">
                {props.userData.msg.name}
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar
