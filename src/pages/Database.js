import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { CardContainer, CardContainerInner, DatabaseContainer } from '../styles/Database.styles'
import BackImage from "../assests/piv1.jpg";




const Database = () => {
  const [listOfReviews, setListOfReviews] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/').then((response) => {
      setListOfReviews(response.data)
    })

  }, [])

  return (
    <DatabaseContainer>
      <h1>Look Through Our Database</h1>
      <CardContainer>
        <CardContainerInner>
          {listOfReviews.map((reviews) => {
            return (
              <div>
                <img src={BackImage} />
                <div>
                  <h4 className="strain" >{reviews.username}</h4>
                  <p className="username">{reviews.strainName}</p>
                  <p className="review">{reviews.review}</p>
                </div>
              </div>
            )
          } )}         
        </CardContainerInner>    
      </CardContainer>
    </DatabaseContainer>
  )
}

export default Database
