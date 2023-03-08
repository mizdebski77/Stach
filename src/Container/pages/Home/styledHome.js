import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.section`
background:  #252A32;
`;


export const ImageContainer = styled.div`
position: relative;
width: 100%;
min-height: 100vh;
height: 100%;
overflow: hidden;
`;

export const Image = styled.img`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
transition: transform 0.5s ease-in-out;
`;

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-around;
width: 100%;
`;

export const Title = styled.h1`
color: white;
font-weight: normal;
font-size: 40px;
background:#B55A08;
border-radius: 20px;
padding: 20px;
margin: 20px;
`;



export const ButtonLink = styled(Link)`
font-size: 20px;
text-decoration: none;
color: orange;
transition: 1s;
padding: 0 40px 40px 0 ;
margin-right: 60px;
&:hover {
  transition: 1s ;
  color:white ;
}
`;

export const Section = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 100px;
align-items: center;
justify-content: center;
padding: 100px;
padding-bottom: 20px;
min-height: 70vh;
`;


export const Photo = styled.img`
width: 100%;
border-radius: 20px;
box-shadow: 0 0 10px rgb(148, 152, 158);
`;


export const TextArea = styled.h3`
color: white;
font-weight: normal;
box-shadow: 0 0 10px rgb(148, 152, 158);
padding: 20px;
border-radius: 20px;
`;

export const ButtonLinkContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`;







