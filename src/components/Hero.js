import React from 'react'
import { ButtonContainer, ButtonCta, ButtonSecondary, HeroContainer, HeroContentContainer } from '../styles/Hero.style'

const Hero = () => {
  return (
    <HeroContainer>
        <HeroContentContainer>
            <h1>Changing The Review System</h1>
            <h2>Check out our database today</h2>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
            <ButtonContainer>
                <ButtonCta>Leave A Review</ButtonCta>
                <ButtonSecondary>Check our Database</ButtonSecondary>
            </ButtonContainer>
        </HeroContentContainer>
    </HeroContainer>
  )
}

export default Hero
