import React from 'react'
import {NavLink} from "react-router-dom";
import {FooterNavButton} from "./footer-items";
import "./footer.css"

export const Footer = () => {
  return (
    <nav class="footer" aria-hidden="false">
        <div class="f_01">

          <NavLink to={'/discover'} className={({ isActive }) => isActive ? "f_item f_actiu" : "f_item" }>
            <FooterNavButton name="discover" />
          </NavLink>

          <NavLink to={'/favourites'} className={({ isActive }) => isActive ? "f_item f_actiu" : "f_item" }>
            <FooterNavButton name="favourites" />
          </NavLink>

          <NavLink to={'/profile'} className={({ isActive }) => isActive ? "f_item f_actiu" : "f_item" }>
            <FooterNavButton name="yo" />
          </NavLink>
        </div>
    </nav>
  )
}


export default Footer;