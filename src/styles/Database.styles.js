import styled from "styled-components";
import DatabaseBackImage from "../assests/city2.png";

export const  DatabaseContainer  = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    background-image: url(${DatabaseBackImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 2rem;
    
    h1 {
        font-size: 3rem;
        color: rgba(255,255,255,.7);
        margin-bottom: 5rem;
    }
`

export const CardContainer = styled.div`
    max-width: 80%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`
export const CardContainerInner = styled.div`
    max-width: 80%;
    display: flex;
    flex-wrap: wrap;
    
    img {
        width: 350px;
        height: 200px;
        padding: 1rem;
    }
    
    h4 {
        color:  rgba(255,255,255,.8);
        
    }
    p {
        color:  rgba(255,255,255,.7);
    }
`

