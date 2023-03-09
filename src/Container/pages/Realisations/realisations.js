import { useState } from "react";
import { Wrapper, Container,  ImageContainer, AdditionalImages, Image, MoreButton } from "./styledRealisations"
import work from "./work.jpg";



export const Realistaions = () => {
    const [showMorePhotos, setShowMorePhotos] = useState(true);
    const [fullScreen, setFullScreen] = useState(false);
    const [imageIndex, setImageIndex] = useState(-1);


    const applyFullScreen = (index) => {
        setFullScreen(!fullScreen);
        setImageIndex(index);
    };

    const morePhotos = () => {
        setShowMorePhotos(!showMorePhotos);
    };


    return (
        <Wrapper>
            <Container >
                <ImageContainer fullScreenImage={fullScreen && imageIndex === 0} onClick={() => applyFullScreen(0)}>
                   <Image fullScreenImage = {fullScreen} src={work} />
                </ImageContainer>

                <ImageContainer fullScreenImage={fullScreen && imageIndex === 1} onClick={() => applyFullScreen(1)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>

                <ImageContainer fullScreenImage={fullScreen && imageIndex === 2} onClick={() => applyFullScreen(2)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>

                <ImageContainer fullScreenImage={fullScreen && imageIndex === 3} onClick={() => applyFullScreen(3)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>
            </Container>

            <AdditionalImages showMore={showMorePhotos}>
                <ImageContainer fullScreenImage={fullScreen && imageIndex === 4} onClick={() => applyFullScreen(1)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>

                <ImageContainer fullScreenImage={fullScreen && imageIndex === 5} onClick={() => applyFullScreen(5)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>

                <ImageContainer fullScreenImage={fullScreen && imageIndex === 6} onClick={() => applyFullScreen(6)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>

                <ImageContainer fullScreenImage={fullScreen && imageIndex === 7} onClick={() => applyFullScreen(7)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>

                <ImageContainer fullScreenImage={fullScreen && imageIndex === 8} onClick={() => applyFullScreen(8)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>
                
                <ImageContainer fullScreenImage={fullScreen && imageIndex === 9} onClick={() => applyFullScreen(9)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageContainer>
            </AdditionalImages>
            <MoreButton onClick={morePhotos}>  Pokaż {showMorePhotos ? "więcej ↓" : "mniej ↑"} </MoreButton>

        </Wrapper>
    )
}
