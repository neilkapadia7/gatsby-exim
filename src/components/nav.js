import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <i class="fas fa-times"></i>
      <center>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <Link to="/" activeClassName="active-nav">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active-nav">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" activeClassName="active-nav">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active-nav">
              Contact
            </Link>
          </li>
        </ul>
      </center>
    </nav>
  )
}

export default Nav
