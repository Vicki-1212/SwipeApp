import React from 'react'

import { RiContactsFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

import './index.css'

const Header = () => {
  return (
    <nav className="nav-bar">
        <RiContactsFill size={30} />
        <p className="nav-heading">Job Display</p>
        <MdLogout size={30} />
    </nav>
  )
}

export default Header