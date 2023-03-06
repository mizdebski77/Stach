import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
margin: 0;
width: 100%;
height: 100px;
background: red;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`;

export const Logo = styled.text`
height: 100px;
font-size: 50px;
`;

export const LinksContainer = styled.li`

`;
export const Links = styled(NavLink)`
color: black;
`;