import { Container } from "../../container"
import { Adress, ContactContainer, ContactInformation, Data, Form, Input, Message, Number, PersonalData, SendButton, Span, Text, Wrapper } from "./styledContact"

export const Contact = () => {
    return (
        <Wrapper>
            <Container />
            <ContactContainer>
                <Form>
                    <Text>
                        <Span>Masz pytanie? Chcesz dowiedzieć się czegoś więcej o działalności firmy?</Span>
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
                    <Data>
                        <Span>
                            Mirosław Stach :
                        </Span>
                        <Adress>
                            794-742-706
                        </Adress>

                        <Span>
                            Adres :
                        </Span>
                        <Adress>
                            32-049  Przeginia 87
                        </Adress>
                    </Data>
                </ContactInformation>
            </ContactContainer>

        </Wrapper>
    )
}