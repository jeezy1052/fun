import React, { useState } from 'react'
import Axios from 'axios'

import { FormContainer, FormInput, RadioButton, RadioButtonContainer, RadioButtonContainerInner, ReviewHeroContainer } from '../styles/ReviewHero.style'


const ReviewHero = () => {
  const [username, setUsername] = useState('');
  const [strainName, setStrainName] = useState('');
  const [review, setReview] = useState('');

  const  submitHandler = async (e) => {
    e.preventDefault();
    
    Axios.post('http://localhost:5000/review', {
      username,
      strainName,
      review,
    }).then((response) => {
      console.log('Review Made')
    })
    
   setUsername('');
   setStrainName('');
   setReview('');

  }
  

  return (
    <ReviewHeroContainer>
        <form onSubmit={submitHandler}>
        <FormContainer>
           <h3>Leave A Review Today</h3>
           <FormInput
            name="username" 
            placeholder='UserName'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
           <FormInput
            name="strainName"
            placeholder='Strain'
            value={strainName}
            onChange={(e) => setStrainName(e.target.value)}
           />
           <RadioButtonContainer>
               <RadioButtonContainerInner>
                   <RadioButton name="skunk" type="radio" />
                   <label for="skunk">Skunk</label>
                   <RadioButton name="fire" type="radio" />
                   <label for="skunk">Fire</label>
                   <RadioButton name="stuck" type="radio" />
                   <label for="skunk">Stuck</label>
                   <RadioButton name="dank" type="radio" />
                   <label for="skunk">Dank</label>
                   <RadioButton name="hof" type="radio" />
                   <label for="skunk">H.O.F</label>
               </RadioButtonContainerInner>
           </RadioButtonContainer>
           <FormInput 
            name="review"
            className='text-area'
            placeholder="Leave a review"
            onChange={(e) => setReview(e.target.value)}
            value={review}
            />
           <input name="selectedFile" className="input-file" type="file" />
           <button className="btn-submit" type="submit">Submit</button>
        </FormContainer>
        </form>
    </ReviewHeroContainer>
  )
}

export default ReviewHero



// const formData = new FormData(e.currentTarget)
// const values = Object.fromEntries(formData.entries())

// fetch('http://localhost:5000/posts', {
//   method: 'post',
//   body: JSON.stringify(values)
// }).then(response => response.json()).then(console.log(values))