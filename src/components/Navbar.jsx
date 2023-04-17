import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">沒有名字的甜點店</span>
          <button className="btn btn-outline-dark position-relative" type="submit">
            購物車
            <span class="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">99</span>
          </button>
        </div>
      </nav>
    )
  }
}
