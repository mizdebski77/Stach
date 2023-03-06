import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
margin: 0 ;
width: 100%;
height: 80px;
background: wheat;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 100px 20px 100px;
`;

export const Logo = styled.div`
font-size: 50px;
`;

export const LinksContainer = styled.li`
display: grid;
grid-template-columns: repeat(6, auto);
grid-gap: 60px;
align-items: center;

`;
export const Links = styled(NavLink)`
color: black;
margin: auto;

`;