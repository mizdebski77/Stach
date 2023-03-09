import { Container, Copyright, Logo,Wrapper } from "./styledFooter"

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Copyright> Copyright © 2020 Mirosław Stach - Firma Usługowa</Copyright>
                <Logo> Logo </Logo>
            </Container>
        </Wrapper>
    )
}