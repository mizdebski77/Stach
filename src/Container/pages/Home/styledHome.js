import { NavLink } from "react-router-dom";
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
display: flex;
justify-content: space-around;
width: 100%;
`;

export const AddTitle = styled.h1`
color: white;
font-weight: normal;
font-size: 40px;
background:#B55A08;
border-radius: 20px;
padding: 20px;
margin: 20px;
`;

export const Images = styled.img`
width: 30%;
border-radius: 20px;
margin-top: 40px;
box-shadow: 0 0 30px rgb(148, 152, 158);
`;

export const Companies = styled.img`
margin: 50px;
width: 25%;
`;

export const ButtonContainer = styled.div`
margin: 0 0 0 30px;
display: flex;
justify-content: flex-end;
`

export const GalleryButton = styled(NavLink)`
padding: 45px;
font-size: 40px;
text-decoration: none;
color: orange;
transition: 1s ;
&:hover {
  transition: 1s ;
  color:white ;
}
`;




export const ServicesImages = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`;




export const ButtonLink = styled(NavLink)`
padding: 45px;
font-size: 40px;
text-decoration: none;
color: orange;
transition: 1s ;
&:hover {
  transition: 1s ;
  color:white ;
}
`;

export const Circle = styled.div`
margin: 40px 20px 20px 20px;
border-radius: 50%;
border: 1px solid white;
width: 400px;
height: 500px;
`;






