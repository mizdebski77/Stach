import { useState } from "react";
import { Wrapper, ImagesWrapper, ImageWrapper, AdditionalImages, Image, MoreButton, Akapit } from "./styledRealisations"
import work from "./work.jpg";


export const Realistaions = () => {
    const [showMorePhotos, setShowMorePhotos] = useState(true);


    const morePhotos = () => {
        setShowMorePhotos(!showMorePhotos);
    };

 


    return (
        <Wrapper>
            <ImagesWrapper >
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
            </ImagesWrapper>

            <AdditionalImages showMore={showMorePhotos}>
                <ImageWrapper >
                    <Image src={work} />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
                <ImageWrapper>
                    <Image src={work} />
                </ImageWrapper>
            </AdditionalImages>
            <MoreButton onClick={morePhotos}>  Pokaż {showMorePhotos ? "więcej ↓" : "mniej ↑"} </MoreButton>

        </Wrapper>
    )
}