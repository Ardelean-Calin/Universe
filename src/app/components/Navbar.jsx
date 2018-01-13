import React from "react";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="indigo">
          <div className="nav-wrapper">
            <div className="brand-logo">Course List</div>
            {/*<ul className="sidenav" id="mobile-navbar">*/}
            {/*<li><a href="#">Test1</a></li>*/}
            {/*<li><a href="#">Test2</a></li>*/}
            {/*<li><a href="#">Test3</a></li>*/}
            {/*</ul>*/}
          </div>
        </nav>
      </div>
    );
  }
  componentDidMount() {
    // $(".sidenav").sidenav();
  }
}
