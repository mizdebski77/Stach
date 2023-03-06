import { Link } from "react-router-dom";
import { Links, LinksContainer, Logo, Wrapper } from "./styledNavigation";

export const Navigation = () => {

    return (
        <Wrapper>
            <Logo>Mirosław Stach</Logo>
            <LinksContainer><Links to="/home">Home</Links></LinksContainer>
            <LinksContainer><Links to="/o-nas">O nas</Links></LinksContainer>
            <LinksContainer><Links to="/usługi">Usługi</Links></LinksContainer>
            <LinksContainer><Links to="/realizacje">Realizacjie</Links></LinksContainer>
            <LinksContainer><Links to="/współpraca">Współpraca</Links></LinksContainer>
            <LinksContainer><Links to="/kontakt">Kontakt</Links></LinksContainer>
        </Wrapper>
    )
};
