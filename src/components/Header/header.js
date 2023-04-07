import React from 'react'
import HeaderButton from "./header-items.js"
import {Logo} from "./../tastal-items.js"
import "./header.css"

export const Header = ({page}) => {
  let left
  switch (page) {
    case "discover":
      left = 'add-photo'      
      break;
    case "profile":
      left = 'settings'      
      break;
    default:
      left = ''
  }
  return (
    <div class="header">
      <HeaderButton name={left} />
      <Logo type="bn" />
    </div>
  )
}

export default Header;