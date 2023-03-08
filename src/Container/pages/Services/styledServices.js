import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";


export const Wrapper = styled.section`
background:  #252A32;
padding-top:100px ;
min-height: 100vh;
`;

export const Section = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 100px;
align-items: center;
justify-content: center;
padding: 100px;
padding-bottom: 100px;
min-height: 70vh;
align-items: start;
`;

export const Title = styled.h3`
color: orange;
text-align: center;
`;

export const Photo = styled.img`
width: 100%;
border-radius: 20px;
box-shadow: 0 0 10px rgb(148, 152, 158);
align-self: center;
`;

export const TextArea = styled.h3`
color: white;
font-size: 18px;
margin: 0;
font-weight: normal;
box-shadow: 0 0 10px rgb(148, 152, 158);
padding: 20px;
border-radius: 20px;
display: flex;
flex-direction: column;
`;

export const AdditionalTextArea = styled.h3`
font-weight: normal;
margin: 0;
font-size: 18px;


${({ readMore }) => readMore && css`
    display: none;
    `};`;

export const MoreButton = styled.button`
width: 200px;
align-self: flex-end;
padding: 10px;
background: none;
color: orange;
border: none;
cursor: pointer;
`;


