import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">News Tiger</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Technology</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Politics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Entertainment</a>
                </li>
              </ul>
              <div class="form-check form-switch">
                <input class="form-check-input" onClick={this.props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault" style={{color:this.props.mode === "light"?"black":"white"}}>Enable Dark Mode </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
