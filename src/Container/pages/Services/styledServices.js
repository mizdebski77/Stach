import styled, { css } from "styled-components";

export const Wrapper = styled.section`
background: #94989E;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;


export const ImagesWrapper = styled.section`
display: grid;
grid-gap: 20px;
margin-top: 150px;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-items: center;
max-width: 80%;
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
margin: 0;
background:#252A32 ;
padding: 10px;


${({ readMore }) => readMore && css`
    display: none;
    `};
`;



