import React from 'react'

import { useSelector } from 'react-redux'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const SavedJob = () => {

  const savedDetails = useSelector((state) => state.savedJob)

  const noViewContainer = () => (
    <div className="no-view-container">
      <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1726062935/kq8iwkwvaxru3aq9zqic.svg" alt="no-view" className="no-view-image" />
      <h1 className="no-view-heading">No Deleted Record Found</h1>
      <p className="no-view-description">Please Swipe to Left!</p>
    </div>
  )


  return (
    <div className="savedJob-page">
      <Header />
      {savedDetails <= 0 ? noViewContainer() : (<div className="savedJob-container">
        {savedDetails.map((eachCompany) => (
          <div className="savedJob-card-container">
            <img src={eachCompany.imageUrl} alt={eachCompany.name} className="savedJob-image" />
            <h1 className="savedJob-name">{eachCompany.name}</h1>
          </div>
        ))}
      </div>)}
      <Footer />
    </div>
  )
}

export default SavedJob
