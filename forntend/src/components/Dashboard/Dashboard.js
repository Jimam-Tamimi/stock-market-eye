import React from "react";

import logo from "../../assets/img/logo.png";

import { Link } from "react-router-dom";

export default function Dashboard() {

  return (
    <>
      <div className="az-sidebar">
        <div className="az-sidebar-header">
          <Link to="index.html" className="az-logo">
            az<span>i</span>a
          </Link>
        </div>
        <div className="az-sidebar-loggedin">
          <div className="az-img-user online">
            <img src="../img/faces/face1.jpg" alt="" />
          </div>
          <div className="media-body">
            <h6>Aziana Pechon</h6>
            <span>Premium Member</span>
          </div>
        </div>
        <div className="az-sidebar-body">
          <ul className="nav">
            <li className="nav-label">Main Menu</li>
            <li className="nav-item active">
              <Link to="index.html" className="nav-link with-sub">
                <i className="typcn typcn-clipboard"></i>Portfolios
              </Link>
              <ul className="nav-sub">
                <li className="nav-sub-item">
                  <Link to="dashboard-ten.html" className="nav-sub-link">
                    Port 1
                  </Link>
                  <Link to="dashboard-ten.html" className="nav-sub-link">
                    Port 2
                  </Link>
                  <Link to="dashboard-ten.html" className="nav-sub-link">
                    Port 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link with-sub">
                <i className="typcn typcn-document"></i> Watchlist
              </Link>
              <ul className="nav-sub">
                <li className="nav-sub-item">
                  <Link to="app-mail.html" className="nav-sub-link">
                    Watchlist 1
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link with-sub">
                <i className="typcn typcn-book"></i>Index
              </Link>
              <ul className="nav-sub">
                <li className="nav-sub-item">
                  <Link to="elem-accordion.html" className="nav-sub-link">
                    Index 1
                  </Link>
                </li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
