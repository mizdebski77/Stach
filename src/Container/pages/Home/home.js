import { AddTitle, ButtonContainer, ButtonLink, Circle, Companies, Container, Image, ImageContainer, Images, Wrapper } from "./styledHome";
import first from './img/1.jpg';
import second from './img/2.jpg';
import third from './img/3.jpg';
import { useEffect, useState } from "react";
import menard from "./img/menard.png";

export const Home = () => {
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
            <AddTitle>Nasze prace: </AddTitle>
            <Container>
                <Images src={first} />
                <Images src={first} />
                <Images src={first} />
            </Container>
            <ButtonContainer>
                <ButtonLink to="/galeria"> Przedź do Galerii </ButtonLink>
            </ButtonContainer>

            <AddTitle>Nasza oferta : </AddTitle>
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
            <Companies src={menard}/>
            <Companies src={menard}/>
            <Companies src={menard}/>
            </Container>
            <ButtonContainer>
                <ButtonLink to="/usługi">Sprawdź nasze wszystkie współprace </ButtonLink>
            </ButtonContainer>

        </Wrapper>
    );
};
