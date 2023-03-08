import { useState } from "react";
import { Wrapper, ImagesWrapper, ImageWrapper, AdditionalImages, Image, MoreButton } from "./styledRealisations"
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
            <ImagesWrapper >
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 0} onClick={() => applyFullScreen(0)}>
                   <Image fullScreenImage = {fullScreen} src={work} />
                </ImageWrapper>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 1} onClick={() => applyFullScreen(1)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 2} onClick={() => applyFullScreen(2)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 3} onClick={() => applyFullScreen(3)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
            </ImagesWrapper>

            <AdditionalImages showMore={showMorePhotos}>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 4} onClick={() => applyFullScreen(1)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 5} onClick={() => applyFullScreen(5)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 6} onClick={() => applyFullScreen(6)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 7} onClick={() => applyFullScreen(7)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 8} onClick={() => applyFullScreen(8)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
                <ImageWrapper fullScreenImage={fullScreen && imageIndex === 9} onClick={() => applyFullScreen(9)}>
                   <Image fullScreenImage = {fullScreen}src={work} />
                </ImageWrapper>
            </AdditionalImages>
            <MoreButton onClick={morePhotos}>  Pokaż {showMorePhotos ? "więcej ↓" : "mniej ↑"} </MoreButton>

        </Wrapper>
    )
}
