import { useState } from "react";
import { Links, LinksContainer, Logo, PhoneContainer, PhoneNavbar, Wrapper } from "./styledNavigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


export const Navigation = () => {

    const [navbarColor, setNavbarColor] = useState(false);
    const [phoneNavbar, setPhoneNavbar] = useState(false);

    const openPhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    const changeColor = () => {
        if (window.scrollY > 50) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        };
    };

    window.addEventListener("scroll", changeColor);

    return (
        <>
            <Wrapper scrolled={navbarColor} >
                <Logo>Logo</Logo>
                <LinksContainer>
                    <Links to="/home">Home</Links>
                    <Links to="/usługi">Usługi</Links>
                    <Links to="/galeria">Galeria</Links>
                    <Links to="/współpraca">Współpraca</Links>
                    <Links to="/kontakt">Kontakt</Links>
                </LinksContainer>

                <PhoneNavbar onClick={openPhoneNavbar}>
                    {phoneNavbar ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
                </PhoneNavbar>

            </Wrapper>

            {phoneNavbar ? <PhoneContainer>
                <Links to="/home">Home</Links>
                <Links to="/usługi">Usługi</Links>
                <Links to="/galeria">Galeria</Links>
                <Links to="/współpraca">Współpraca</Links>
                <Links to="/kontakt">Kontakt</Links>
            </PhoneContainer> : ""}
        </>

    )
};
