import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
margin: 0 ;
width: 100%;
height: 80px;
background: wheat;
display: flex;
background: white;
justify-content: space-between;
align-items: center;
padding: 20px 100px 20px 100px;
position: fixed;


${({ scrolled }) => scrolled && css`
    border-bottom:2px solid black;
    `};
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

const activeClassName = "active";

export const Links = styled(NavLink)`
color: black;
margin: auto;
text-decoration: none;
transition: .5s;
padding: 10px;


&:hover {
    transform: translateY(-7px);
}

&.${activeClassName} {
    transition: 1s;
    font-weight: bold;
    border-bottom: 1px solid black;
}

`;