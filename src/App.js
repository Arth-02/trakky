import './App.css';
// import MainBody from './Components/MainBody';
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react'
import search from "./svgs/search.svg"
import hamburger from "./svgs/hamburger.svg"
import profile from "./svgs/profile_icon.svg"
import down_arrow from "./svgs/down_arrow.svg"

//Rotes...
import Dashboard from './Components/Dashboard'
import Salonlist from './Components/Salonlist'
import AddSalon from './Components/AddSalon'

function App() {
  const [hamburger_state, change_hamburger_state] = React.useState(false);
  const [profile_dropdown, change_profile_dropdown] = React.useState(false);

  return (
    <BrowserRouter>
      <div id="main_root" className="">
        <div id="main" className="  ">
          <div id="sidebar" className={` ${hamburger_state ? 'sidebar_open ' : ''} `}  >
            <Sidebar change_hamburger_state={change_hamburger_state} hamburger_state={hamburger_state}/>
          </div>
          <div id="body_div" className="">
            <div id="header_div" className="  ">
              <div id="searchbar_div">
                <img id="search_icon" src={search} alt="hamburger_icon" ></img>
                <input id="searchbar" type="text" placeholder="Search for something...  "></input>
              </div>

              <div
                id="profile_div"
                className="  "
                onClick={() => { change_profile_dropdown(!profile_dropdown); }}
              >
                <img id="profile_img" src={profile} alt="profile" ></img>
                <div id="profile_dropdown" className="  ">
                  <span>SOHAM</span>
                  <img id="down_arrow" src={down_arrow} alt="down_arrow"></img>
                </div>
                {profile_dropdown &&
                  <div className="dropdown"  >
                    <div>
                      <div>Profile</div>
                      <div>Settings</div>
                      <div>Logout</div>
                    </div>
                  </div>
                }
              </div>

              <div id="hamburger_div" className="  ">
                <button onClick={() => {
                  change_hamburger_state(!hamburger_state);
                }} >
                  <img id="hamburger_icon" src={hamburger} alt="hamburger_icon" ></img>
                </button>
              </div>
            </div>
            <div id="route_body_div" className="  ">
              <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/listsalons' element={<Salonlist/>} />
                <Route path='/addsalon' element={<AddSalon/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;