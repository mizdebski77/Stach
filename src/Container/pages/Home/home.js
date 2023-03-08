import { Image, ImageContainer, Photo, Section, Title, Wrapper, TextArea, Links, ButtonLink, ButtonLinkContainer } from "./styledHome";
import first from './img/1.jpg';
import second from './img/2.jpg';
import third from './img/3.jpg';
import { useEffect, useState } from "react";
import menard from "./img/menard.png";

export const Home = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolorin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const images = [first, second, third];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length);
        }, 10000);

        return () => clearInterval(intervalID);
    }, [images]);

    return (
        <Wrapper>
            <ImageContainer>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        style={{
                            opacity: `${index === currentImage ? 1 : 0}`,
                            transition: 'all 4s ease-in-out',
                        }}
                    />
                ))};
            </ImageContainer>

            <Title> O nas </Title>
            <Section>
                <Photo src={third} />
                <TextArea>
                    {text}
                    {text}
                    {text}
                </TextArea>
            </Section>


            <Title> Czym się zajmujemy</Title>
            <Section>
                <Photo src={second} />
                <TextArea>
                    {text}
                    {text}
                    {text}
                </TextArea>
            </Section>

            <ButtonLinkContainer>
                <ButtonLink to="/usługi"> Pełna oferta </ButtonLink>
            </ButtonLinkContainer>

            

            <Title> Nasza praca </Title>
            <Section>
                <Photo src={first} />
                <TextArea>
                    {text}
                    {text}
                    {text}
                </TextArea>
            </Section>
            
            <ButtonLinkContainer>
                <ButtonLink to="/galeria"> Galeria </ButtonLink>
            </ButtonLinkContainer>



            {/* 
            <AddTitle>Czym się zajmujemy </AddTitle>
            <Container>
                <Images src={first} />
                <Images src={first} />
                <Images src={first} />
            </Container>
            <ButtonContainer>
                <ButtonLink to="/galeria"> Przedź do Galerii </ButtonLink>
            </ButtonContainer>

            <AddTitle>Co oferujemy</AddTitle>
            <Container>
                <Images src={second} />
                <Images src={second} />
                <Images src={second} />
            </Container>
            <ButtonContainer>
                <ButtonLink to="/usługi"> Przedź do Oferty </ButtonLink>
            </ButtonContainer>

            <AddTitle>Współpracowaliśmy z takimi firmami jak: : </AddTitle>
            <Container>
                <Companies src={menard} />
                <Companies src={menard} />
                <Companies src={menard} />
            </Container>
            <ButtonContainer>
                <ButtonLink to="/usługi">Sprawdź nasze wszystkie współprace </ButtonLink>
            </ButtonContainer> */}

        </Wrapper>
    );
};
