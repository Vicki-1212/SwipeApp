import React from 'react'

import {Link} from 'react-router-dom'

import { LiaTrashAlt } from "react-icons/lia";
import { GrUndo } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";

import './index.css'

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/deleted-job" className="nav-link">
        <div className="container delete">
          <LiaTrashAlt size={25}/>
          <p className="name">Trash</p>
        </div>
      </Link>
      <Link to="/" className="nav-link">
        <div className="container undo">
          <GrUndo size={25} color={"#000000"}/>
          <p className="name">Home</p>
        </div>
      </Link>
      <Link to="/saved-job" className="nav-link">
        <div className="container keep">
          <MdOutlineFileDownload size={25}/>
          <p className="name">Keep</p>
        </div>
      </Link>
      
      
    </div>
  )
}

export default Footer
