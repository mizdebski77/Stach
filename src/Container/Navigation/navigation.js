import { Links, LinksContainer, Logo, Wrapper } from "./styledNavigation";

export const Navigation = () => {

    return (
        <Wrapper>
            <Logo>Mirosław Stach</Logo>
            <LinksContainer>
                <Links to="/home">Home</Links>
                <Links to="/o-nas">O nas</Links>
                <Links to="/usługi">Usługi</Links>
                <Links to="/realizacje">Realizacjie</Links>
                <Links to="/współpraca">Współpraca</Links>
                <Links to="/kontakt">Kontakt</Links>
            </LinksContainer>

        </Wrapper>
    )
};
