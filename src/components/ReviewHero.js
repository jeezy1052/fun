import React from 'react'

import { FormContainer, FormInput, RadioButton, RadioButtonContainer, RadioButtonContainerInner, ReviewHeroContainer } from '../styles/ReviewHero.style'

const submitHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget)
  const values = Object.fromEntries(formData.entries())

  fetch('http://localhost:5000/posts', {
    method: 'post',
    body: JSON.stringify(values)
  }).then(response => response.json()).then(console.log(values))
}

const ReviewHero = () => {
  return (
    <ReviewHeroContainer>
        <form onSubmit={submitHandler}>
        <FormContainer>
           <h3>Leave A Review Today</h3>
           <FormInput name="userName" placeholder='UserName'/>
           <FormInput name="strainName" placeholder='Strain' />
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
           <FormInput name="review" className='text-area' placeholder="Leave a review" />
           <input name="selectedFile" className="input-file" type="file" />
           <button className="btn-submit" type="submit">Submit</button>
        </FormContainer>
        </form>
    </ReviewHeroContainer>
  )
}

export default ReviewHero
