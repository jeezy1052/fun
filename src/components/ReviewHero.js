import React from 'react'

import { FormContainer, FormInput, RadioButton, RadioButtonContainer, RadioButtonContainerInner, ReviewHeroContainer } from '../styles/ReviewHero.style'

const ReviewHero = () => {
  return (
    <ReviewHeroContainer>
        <FormContainer>
           <h3>Leave A Review Today</h3>
           <FormInput placeholder='UserName'/>
           <FormInput placeholder='Strain' />
           <RadioButtonContainer>
               <RadioButtonContainerInner>
                   <RadioButton name="skunk" type="radio" />
                   <label for="skunk" class="Skunk">Skunk</label>
                   <RadioButton name="skunk" type="radio" />
                   <label for="skunk" class="F">Fire</label>
                   <RadioButton name="skunk" type="radio" />
                   <label for="skunk" class="Skunk">Stuck</label>
                   <RadioButton name="skunk" type="radio" />
                   <label for="skunk" class="Da">Dank</label>
                   <RadioButton name="skunk" type="radio" />
                   <label for="skunk" class="Skunk">H.O.F</label>
               </RadioButtonContainerInner>
           </RadioButtonContainer>
           <FormInput className='text-area' placeholder="Leave a review" />
           <input className="input-file" type="file" />
           <button className="btn-submit" type="submit">Submit</button>
        </FormContainer>
    </ReviewHeroContainer>
  )
}

export default ReviewHero
