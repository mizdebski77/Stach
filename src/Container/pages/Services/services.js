import { Image, ImagesWrapper, ImageWrapper, More, Span,  Wrapper } from "./styledServices"
import koparka from "./img/koparka.jpg"

export const Services = () => {
    return (

        <Wrapper>
            <ImagesWrapper>
                <ImageWrapper>
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką gąsienicową</Span>
                    <More>Czytaj więcej ↓</More>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką kołową</Span>
                    <More>Czytaj więcej ↓</More>
                </ImageWrapper>                <ImageWrapper>
                    <Image src={koparka}></Image>
                    <Span> Usługi mini koparką</Span>
                    <More>Czytaj więcej ↓</More>
                </ImageWrapper>                <ImageWrapper>
                    <Image src={koparka}></Image>
                    <Span> Usługi traktorem</Span>
                    <More>Czytaj więcej ↓</More>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={koparka}></Image>
                    <Span> Usługi ładowarką </Span>
                    <More>Czytaj więcej ↓</More>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką gąsienicową</Span>
                    <More>Czytaj więcej ↓</More>
                </ImageWrapper>


            </ImagesWrapper>
        </Wrapper>

    )
}