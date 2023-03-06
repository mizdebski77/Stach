import { Container } from "../container"
import { ContactContainer, ContactInformation, Form, Input, Message, PersonalData, SendButton, Text, Wrapper } from "./styledContact"

export const Contact = () => {
    return (
        <Wrapper>
            <Container />
            <ContactContainer>
                <Form>
                    <Text>
                        Masz pytanie? Chcesz dowiedzieć się czegoś więcej o działalności firmy?
                        Skorzystaj z poniższego formularza kontaktowego.
                    </Text>
                    <PersonalData>
                        <Input placeholder="Imię i Nazwisko *"></Input>
                        <Input placeholder="Email *"></Input>
                    </PersonalData>

                    <Message placeholder="Wiadomość *"></Message>
                    <SendButton>Wyślij Wiadomość</SendButton>
                </Form>
                <ContactInformation>

                </ContactInformation>
            </ContactContainer>

        </Wrapper>
    )
}