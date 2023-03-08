import styled, { css } from "styled-components";

export const Wrapper = styled.section`
background: #94989E;
display: flex;
justify-content: center;
align-items: center;
`;


export const ImagesWrapper = styled.section`
margin: 50px;

display: grid;
grid-gap: 100px;
margin-top: 150px;
max-width: 50%;
margin-bottom: 150px;
`;


export const Image = styled.img`
width: 100%;
`;


export const ImageWrapper = styled.div`
width: 100%;
color: white;
border: 1px solid white;
background:#252A32 ;
box-shadow: 0 0 30px #252A32 ;
transition: 1s;

&:hover {
    box-shadow: 0 0 30px white ;
}
`;


export const Span = styled.p`
color: orange;
padding: 20px;
font-size: 35px;
text-align: center;

${({ change }) => change && css`
color: white;
    `};
`;


export const More = styled.button`
background: transparent;
color: white;
border: none;
padding: 20px;
transition: 0.5s;
&:hover {
transform: scale(1.05);
cursor: pointer;
}
`;



export const MoreText = styled.p`
height: 200px;
background:#252A32 ;
padding: 10px;

${({ readMore }) => readMore && css`
    display: none;
    `};
`;




