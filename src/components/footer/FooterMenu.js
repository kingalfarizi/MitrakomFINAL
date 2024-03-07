import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

export default class FooterMenu extends React.Component {
  render() {
    return (
      <ul className="footer-menu  flex-container flex-column">

          <li>
            <NavLink
              onClick={() => {
                ResetLocation()
              }}
              style={({ isActive }) =>
                isActive
                  ? {
                    textDecoration: 'none',
                    color: '#ff6240',
                  }
                  : {}
              }
              className="txt-white"
              to="/"
            >
              Home
            </NavLink>
          </li>

        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
                : {}
            }
            onClick={ResetLocation}
            className="txt-white"
            to="/menu"
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
                : {}
            }
            onClick={ResetLocation}
            className="txt-white"
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
                : {}
            }
            onClick={ResetLocation}
            className="txt-white"
            to="/about"
          >
            About
          </NavLink>
        </li>
        
        <li>
        </li>
      </ul>
    );
  }
}
