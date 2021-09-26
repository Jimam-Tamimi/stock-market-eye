import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import prof from "../../assets/img/prof.jpg";
import "../../assets/css/dropdown.css";

import { AiOutlineCaretDown } from "react-icons/ai";

import { logout } from "../../redux/auth/actions";

export default function Navbar({ toggleDash, setDarkMode, darkMode }) {
  // redux
  const dispatch = useDispatch();

  return (
    <>
      <div className="az-header">
        <div className="container-fluid">
          <div className="az-header-left">
            <a href="" id="azSidebarToggle" className="az-header-menu-icon">
              <span></span>
            </a>
          </div>

          <div className="az-header-center d-flex">
            <div class="dropdown">
              <div   id="dropdownMenuPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <div className="dropdown-header ">
                  <p>Portfolio </p> <AiOutlineCaretDown />
                </div>
              </div>
              <div  class="dropdown-menu  " aria-labelledby="dropdownMenuPortfolio" x-placement="top-start" style={{ left: "0", padding: "11px 14px !important" }}  >
                <div  data-toggle="modal" data-target="#addPortfolioModal" class="dropdown-item" style={{ cursor: "pointer" }}>
                  Create Portfolio
                </div>
                <div class="dropdown-item" style={{ cursor: "pointer" }}>
                  Create Portfolio 2
                </div>
              </div>
            </div> 

            <div class="dropdown">
              <div   id="dropdownMenuWatchlist" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <div className="dropdown-header ">
                  <p>Watchlist </p> <AiOutlineCaretDown />
                </div>
              </div>
              <div class="dropdown-menu  " aria-labelledby="dropdownMenuWatchlist" x-placement="top-start" style={{ left: "0", padding: "11px 14px !important" }}  >
                <div  data-toggle="modal"  data-target="#modalWatchlist"  class="dropdown-item" style={{ cursor: "pointer" }}>
                  Create Watchlist
                </div>
                <div class="dropdown-item" style={{ cursor: "pointer" }}>
                  Create Watchlist 2
                </div>
              </div>
            </div> 

            <div class="dropdown">
              <div   id="dropdownMenuIndex" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <div className="dropdown-header ">
                  <p>Index </p> <AiOutlineCaretDown />
                </div>
              </div>
              <div class="dropdown-menu  " aria-labelledby="dropdownMenuIndex" x-placement="top-start" style={{ left: "0", padding: "11px 14px !important" }}  >
                <div data-toggle="modal"  data-target="#addIndexModal"  class="dropdown-item" style={{ cursor: "pointer" }}>
                  Create Index
                </div>
                <div class="dropdown-item" style={{ cursor: "pointer" }}>
                  Create Index 2
                </div>
              </div>
            </div> 

            
            
          </div>

          <div className="az-header-right">
            <div className="dropdown az-profile-menu">
              <a href="" className="az-img-user">
                <img src="../img/faces/face1.jpg" alt="" />
              </a>
              <div className="dropdown-menu">
                <div className="az-dropdown-header d-sm-none">
                  <a href="" className="az-header-arrow">
                    <i className="icon ion-md-arrow-back"></i>
                  </a>
                </div>
                <div className="az-header-profile">
                  <div className="az-img-user">
                    <img src="../img/faces/face1.jpg" alt="" />
                  </div>
                  <h6>Aziana Pechon</h6>
                  <span>Premium Member</span>
                </div>

                <a href="" className="dropdown-item">
                  <i className="typcn typcn-user-outline"></i> My Profile
                </a>
                <a href="" className="dropdown-item">
                  <i className="typcn typcn-edit"></i> Edit Profile
                </a>
                <a href="" className="dropdown-item">
                  <i className="typcn typcn-time"></i> Activity Logs
                </a>
                <a href="" className="dropdown-item">
                  <i className="typcn typcn-cog-outline"></i> Account Settings
                </a>
                <a href="page-signin.html" className="dropdown-item">
                  <i className="typcn typcn-power-outline"></i> Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
