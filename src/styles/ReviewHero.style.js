import styled from "styled-components"
import ReviewBackImage from '../assests/rock3.png'

export const ReviewHeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${ReviewBackImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
   
`;

export const FormContainer = styled.div`
    max-width: 40%;
    
    background-color: rgba(159,232,194,.3);
    min-height: 50vh;
    margin-left: 4.4%;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color:  rgba(255,255,255,.9);
        font-size: 1.8rem;
    }

    .text-area {
        height: 3rem;
        
    }

    .input-file {
        margin-bottom: 1rem;
        margin-right: 1rem;
    }

    .btn-submit {
        width: 50%;
        height: 2rem;
        border-radius: 10px;
        background-color: rgba(159,232,194,.9);
        color: white;
        font-weight: bold;
    }
    
`;

export const FormInput = styled.input`
    min-width: 50%;
    padding: .5rem 0;
    margin-bottom: 1rem;
    border-radius: 10px;
    border: 2px solid rgba(159,232,194,.9);
`

export const RadioButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around
`
export const RadioButtonContainerInner = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    

    label {
        font-size: .6rem;
        font-weight: bold;
        padding: .2rem;
        color:  rgba(159,232,194,.8)
    }
    
`

export const RadioButton = styled.input`
    
`