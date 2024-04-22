// import "./Header.css";

// import React from "react";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";

// export function Header() {
//   return (

//     <div >
//       <nav className="navbar navbar-expand-sm  navbar-light bg-light shadow  " >
//         <div className="container-fluid">
//           <NavLink to="/" className="navbar-brand   logo">
//        Form Validations
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#mynavbar"
//           ><span className="navbar-toggler-icon">
//           </span>
//           </button>

//           <div className="collapse navbar-collapse" id="mynavbar">
//             <ul className="navbar-nav me-auto">
//               {/* <li className="nav-item">
//                 <NavLink to="/reduxform" className="nav-link ">
//                   Redux
//                 </NavLink>
//               </li> */}
//               <li className="nav-item">
//                 <NavLink className="nav-link " to="/Sagaform">
//                   Saga
//                 </NavLink>
//               </li>
//             </ul>

//             <div className="d-flex">
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                   <NavDropdown
//                     className="nav-link"
//                     title={<span style={{ color: 'black' }}>Hooks with API</span>}
//                     id="basic-nav-dropdown"

//                   >
//                     <NavDropdown.Item href="/dataform">
//                       Use State
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/usereducer">
//                       Use Reducer
//                     </NavDropdown.Item>
//                     <NavDropdown.Item
//                       href="/usecontextform"
//                       to="usecontextform"
//                     >
//                       Use Context
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//               </Navbar.Collapse>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

import "./Header.css";
import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm  bg-dark bg-opacity-75 navbar-dark shadow">
        <div className="container">
          <NavLink to="/" className="navbar-brand logo">
            Form Validations
          </NavLink>

          <div className="">
            <ul className="navbar-nav me-auto"></ul>

            <div className="d-flex">
              <NavLink to="/" className="navbar-brand logo">
                Home
              </NavLink>
              <Nav className="me-auto">
                <NavDropdown
                  title={<span style={{ color: "black" }} className="text-light">Hooks with API</span>}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/dataform">
                    Use State
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/usereducer">
                    Use Reducer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/usecontextform">
                    Use Context
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
