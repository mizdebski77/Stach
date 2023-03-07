import { useState } from "react";
import { Links, LinksContainer, Logo, Wrapper } from "./styledNavigation";

export const Navigation = () => {

    const [navbarColor, setNavbarColor] = useState (false);
    
    
    const changeColor = () => {
        if(window.scrollY > 20){
            setNavbarColor(true);
        }else {
            setNavbarColor(false);
        };
    };

    window.addEventListener("scroll", changeColor);

    return (
        <Wrapper scrolled = {navbarColor} >
            <Logo>Logo</Logo>
            <LinksContainer>
                <Links to="/home">Home</Links>
                <Links to="/o-nas">O nas</Links>
                <Links to="/usługi">Usługi</Links>
                <Links to="/galeria">Galeria</Links>
                <Links to="/współpraca">Współpraca</Links>
                <Links to="/kontakt">Kontakt</Links>
            </LinksContainer>

        </Wrapper>
    )
};
