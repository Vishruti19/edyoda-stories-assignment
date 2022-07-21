import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav className="flex-class">
          <div className="flex-class1">
            <div className="logo">
              <div className="edyoda-logo">EDYODA</div>
              <span className="stories-logo">Stories</span>
            </div>
            <div className="explore">
              <div>
                <button className="explore-button">
                  Explore Categories<i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
              <div className="dropdown-content">
                <a href="#" className="dropdown-items">
                  Artificial Intelligence
                </a>

                <a href="#" className="dropdown-items">
                  Cloud Computing
                </a>
                <a href="#" className="dropdown-items">
                  DevOps
                </a>
                <a href="#" className="dropdown-items">
                  Programming Languages
                </a>
                <a href="#" className="dropdown-items">
                  Mobile Application Development
                </a>
                <a href="#" className="dropdown-items">
                  Technology and Tools
                </a>
                <a href="#" className="dropdown-items">
                  Get a Job in a Tech Company
                </a>
                <a href="#" className="dropdown-items">
                  Others
                </a>
              </div>
            </div>
          </div>

          <div className="flex-class2">
            <div id="about">
              <p>
                EdYoda is free learning and knowledge <br />
                sharing platform for techies
              </p>
            </div>
            <div>
              <a href="#">
                <button id="goto-website">Go To Main Website</button>
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
