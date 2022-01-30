import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: 	#9fe8c2;
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex: 70%;
    align-items: center;
    padding-left: 5%;   
`;

export const RightContainer = styled.div`
    display: flex;
    flex: 30%;
    justify-content: flex-end;
    padding-right: 50px;
`;


export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;
export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
    padding-top: 10px;
`;

export const NavbarExtendedContainer = styled.div`
    
`;