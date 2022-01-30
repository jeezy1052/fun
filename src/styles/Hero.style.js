import styled from 'styled-components'
import BackImage from '../assests/11.png'


export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url(${BackImage});
    background: linear-gradient(rgba(255, 0, 150, 1));
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
   
`;

export const HeroContentContainer = styled.div`
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50%;

    h1 {
        color:  rgba(255,255,255,.5);
        font-size: 2.5rem;
        margin: 0 0 .2rem 0
        
    }

    h2 {
        color: rgba(255,255,255,.4);
        font-size: 2rem;
        margin: 0 0 .5rem 0
        
    }

    p {
        color:  rgba(255,255,255,.3);
        margin: 0 0 1.5rem 0;
        line-height: 1.6;
        font-size: .9rem;
        text-align: center;
        max-width: 50ch;
    }
`

export const ButtonContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between
`
export const ButtonCta = styled.button`
    width: 45%;
    padding: .5rem 0;
    border-radius: 10px;
    background-color:  rgba(76,184,143);
    font-weight: bold;
    color: white;
`
export const ButtonSecondary = styled(ButtonCta)`
    background-color: rgba(255,255,255,.9);
    color: rgba(76,184,143);
    
`