import styled from "styled-components";

export const Wrapper = styled.section`
background: #94989E;
display: flex;
justify-content: center;
align-items: center;
`;

export const Title = styled.h1`
margin: 0 auto;
color: white;
`;

export const ImagesWrapper = styled.section`
display: grid;
grid-gap: 20px;
margin-top: 200px;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-items: center;
max-width: 80%;
`;

export const Image = styled.img`
width: 100%;
`;
export const ImageWrapper = styled.div`
width: 100%;
color: white;
border: 1px solid white;
background:#252A32 ;
`;

export const Span = styled.p `
color: orange;
padding: 20px;
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



