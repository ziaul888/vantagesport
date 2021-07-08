import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="quick-nav">
                    <div className="title">About</div>

                    <ul className="nav-list">
                      <li className="list-item">
                        <NavLink to="" className="list-link">
                          Features
                        </NavLink>
                      </li>
                      <li className="list-item">
                        <NavLink to="" className="list-link">
                          Our Team
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="quick-nav">
                    <div className="title">Support</div>

                    <ul className="nav-list">
                      <li className="list-item">
                        <NavLink to="" className="list-link">
                          Documentation
                        </NavLink>
                      </li>
                      <li className="list-item">
                        <NavLink to="/faq.html" className="list-link">
                          FAQ
                        </NavLink>
                      </li>
                      <li className="list-item">
                        <NavLink to="" className="list-link">
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="quick-nav">
                    <div className="title">Legal</div>

                    <ul className="nav-list">
                      <li className="list-item">
                        <NavLink to="" className="list-link">
                          Terms of Use
                        </NavLink>
                      </li>
                      <li className="list-item">
                        <NavLink to="" className="list-link">
                          Privacy Policy
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="quick-nav">
                    <div className="title">Press</div>

                    <ul className="nav-list">
                      <li className="list-item">
                        <NavLink to="" className="list-link">
                          News Releases
                        </NavLink>
                      </li>
                      <li className="list-item">
                        <NavLink to="" className="list-link">
                          PR Stuff
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
