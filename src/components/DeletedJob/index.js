import React from 'react'

import { useSelector } from 'react-redux'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const DeletedJob = () => {

  const deletedDetails = useSelector((state) => state.deletedJob)

  const noViewContainer = () => (
    <div className="no-view-container">
      <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1726062935/kq8iwkwvaxru3aq9zqic.svg" alt="no-view" className="no-view-image" />
      <h1 className="no-view-heading">No Deleted Record Found</h1>
      <p className="no-view-description">Please Swipe to Left!</p>
    </div>
  )

  return (
    <div className="deleted-job-page">
        <Header />
          {deletedDetails.length <= 0 ? noViewContainer() : (<div className="deleted-job-container">
              {deletedDetails.map((eachCompany) => (
                <div className="deletedJob-card-container">
                  <img src={eachCompany.imageUrl} alt={eachCompany.name} className="deletedJob-image" />
                  <h1 className="deletedJob-name">{eachCompany.name}</h1>
                </div>
              ))}
            </div>)}
        <Footer />
    </div>
  )
}

export default DeletedJob

//828842
