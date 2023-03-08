import styled, { css } from "styled-components";

export const Wrapper = styled.section`
background:  #252A32;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


export const Container = styled.section`
display: grid;
grid-gap: 20px;
margin-top: 150px;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-items: center;
max-width: 70%;
margin-bottom: 20px;
`;


export const ImageContainer = styled.div`
width: 100%;
color: white;
border: 1px solid white;
background:#252A32 ;
box-shadow: 0 0 10px rgb(148, 152, 158);
overflow: hidden;

${({ fullScreenImage }) => fullScreenImage && css`
width: 80%;
height: 80%;
position: fixed;
bottom: 100px;
right: 220px;
left: 220px;
margin: auto;
z-index: 980;
`};

&:hover {
    box-shadow: 0 0 30px white ;
    cursor: pointer;
};`;



export const AdditionalImages = styled.div`
display: grid;
grid-gap: 20px;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-items: center;
max-width: 70%;
margin-bottom: 20px;

${({ showMore }) => showMore && css`
    display: none;
`};`;



export const Image = styled.img`
width: 100%;
height: 100%;
transition: 0.5s linear;
transition-timing-function:ease-in-out;

&:hover{
    zoom: normal;
    transform: scale(1.1);
    opacity: 60%;
}

${({ fullScreenImage }) =>
        fullScreenImage &&
        css`
      pointer-events: none;
    `};

;
`;

export const MoreButton = styled.button`
color: black;
align-self: end;
padding: 20px;
margin-bottom: 150px;
font-size: 30px;
width: 100%;
text-align: right;
background: transparent;
border: none;
padding-right: 0;
transition: 0.5s;
margin-right: 15%;

&:hover {
    cursor: pointer;
    color: #2E2E2E;
    transform: translateY(-7px);
};`;



