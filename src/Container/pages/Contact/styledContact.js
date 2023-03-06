import styled from "styled-components";

export const Wrapper = styled.section`
min-height: 50vh;
background: green;
`;

export const ContactContainer = styled.section`
display: grid;
grid-template-columns: 60% 40%;
`;

export const Text = styled.h2`
width: 70%;
margin-top: 100px;
`

export const Form = styled.form`
min-height: 100vh;
background: red;
width: 100%;
display: flex;
flex-direction: column;
grid-gap: 20px;
justify-content: flex-start;
align-items:center ;
`;

export const PersonalData = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 30px;
width: 70%;

`;

export const ContactInformation = styled.div`
`;

export const Input = styled.input`
padding: 20px;
width: 100%;
background: transparent;
border: none;
border: 1px solid white;
border-radius: 10px;
color: white;


&::placeholder {
    color: white;
}

`;

export const Message = styled.textarea`
width: 70%;
background: transparent;
border: none;
border: 1px solid white;
resize: none;
height: 150px;
border-radius: 10px;
padding: 20px;
color: white;


&::placeholder {
    color: white;
}
`;

export const SendButton = styled.button`
padding: 20px;
border-radius: 10px;
border: 1px solid white;
background: transparent;
color: white;
`;