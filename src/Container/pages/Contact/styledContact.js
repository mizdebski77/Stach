import styled from "styled-components";

export const Wrapper = styled.section`
min-height: 50vh;
background: #94989E;

`;

export const ContactContainer = styled.section`
display: grid;
grid-template-columns: 60% 40%;
`;

export const Text = styled.h2`
width: 70%;
margin-top: 100px;
color: white;
font-size: 21px;
font-weight: normal;
`

export const Form = styled.form`
min-height: 100vh;
background: #252A32;
width: 100%;
display: flex;
flex-direction: column;
grid-gap: 20px;
justify-content: center;
align-items:center ;
box-shadow: 0 0 40px  #252A32; 

`;

export const PersonalData = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 30px;
width: 70%;

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
transition: 0.5s;

&:hover{
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 0 10px  #4D5460;
}
`;

export const Span = styled.span`
color: orange;
margin: 0 auto;
`;

export const ContactInformation = styled.div`
display: grid;
justify-content: center;
align-items: center;
`;

export const Data = styled.h2`
display: grid;
color:black;
justify-content: center;
align-items: center;
`;

export const Adress = styled.address`
padding: 20px;
text-align: center;
`;

