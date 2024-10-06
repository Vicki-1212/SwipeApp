import React from 'react'

import TinderCard from 'react-tinder-card'

import {addToSave} from '../../slice/savedJobSlice'

import { addToTrash } from '../../slice/deletedJobSlice'

import { useDispatch } from 'react-redux'

import './index.css'

const company = [
    {
      id: 1,
      name: "Google",
      imageUrl: "https://res.cloudinary.com/dtnwl3ron/image/upload/v1728124068/lb2gi5emqupc3dxr91yh.png",
      role: "Software Engineer",
      location: "India",
    },
    {
      id: 2,
      name: "Microsoft",
      imageUrl: "https://res.cloudinary.com/dtnwl3ron/image/upload/v1728124341/evuxg3fj0xwtyaphtnzt.jpg",
      role: "Data Analyst",
      location: "India",
    },
    {
      id: 3,
      name: "Apple",
      imageUrl: "https://res.cloudinary.com/dtnwl3ron/image/upload/v1728124489/p3l84mvoo3rpzmloolln.png",
      role: "System Engineer",
      location: "India",
    },
    {
      id: 4,
      name: "Tesla",
      imageUrl: "https://res.cloudinary.com/dtnwl3ron/image/upload/v1728124604/oemgiu3pia8xiatxewtg.webp",
      role: "Digital Marketing",
      location: "USA",
    },
    {
      id: 5,
      name: "Facebook",
      imageUrl: "https://res.cloudinary.com/dtnwl3ron/image/upload/v1728124699/eahd6vhlt6cbc5ltbyuz.webp",
      role: "Application Developer",
      location: "India",
    },
    {
      id: 6,
      name: "Amazon",
      imageUrl: "https://res.cloudinary.com/dtnwl3ron/image/upload/v1728124777/qbvoylmd1fax53wsqu5j.png",
      role: "Technical Support",
      location: "India",
    },
    {
      id: 7,
      name: "IBM",
      imageUrl: "https://res.cloudinary.com/dtnwl3ron/image/upload/v1728124854/nvlrzr20v0fwk4rmaulj.webp",
      role: "FrontEnd Developer",
      location: "India",
    },
    {
      id: 8,
      name: "Flipkart",
      imageUrl: "https://res.cloudinary.com/dtnwl3ron/image/upload/v1728124962/foofrtrrsexs8vfvu0ko.avif",
      role: "BackEnd Developer",
      location: "India",
    }
]

const JobCard = () => {

  const dispatch = useDispatch();

  const swiped = (direction, id) => {
    if(direction === "right") {
      const details = company.filter((eachCompany) => eachCompany.id === id)
      dispatch(addToSave(details[0]))
    }
    else {
      const trashDetails = company.filter((eachCompany) => eachCompany.id === id)
      dispatch(addToTrash(trashDetails[0]))
    }
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  return (
    <div className="job-display-container">
        {company.map((eachCompany) => (
          <TinderCard className="tinderCard" key={eachCompany.id} onSwipe={(dir) => swiped(dir, eachCompany.id)} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
            <div className="job-card-container">
              <img src={eachCompany.imageUrl} alt="" className="company-image"/>
              <br />
              <div className="company-details-info">
                  <h1 className="company-name">Company: {eachCompany.name}</h1>
                  <p className="company-role">Role: {eachCompany.role}</p>
                  <p className="company-location">Location: {eachCompany.location}</p>
              </div>
            </div>
          </TinderCard>
            
        ))}
    </div>
  )
}

export default JobCard