import { useState } from "react";
import { Wrapper, Image, CloseButton, FullScreenWrapper, FullScreenImage, ImageContainer, ImagesContainer, AdditionalImages, MoreButton, ButtonContainer } from "./styledRealisations"
import work from "./work.jpg";
import { AiOutlineClose } from "react-icons/ai";

export const Realisations = () => {
   const [showMorePhotos, setShowMorePhotos] = useState(true);
   const [fullScreenPhoto, setFullScreenPhoto] = useState(false);
   const [fullScreenPhotoSrc, setFullScreenPhotoSrc] = useState("");


   const morePhotos = () => {
      setShowMorePhotos(!showMorePhotos);
   };

   const openFullScreen = (src) => {
      setFullScreenPhotoSrc(src);
      setFullScreenPhoto(true);
   };

   const closeFullScreen = () => setFullScreenPhoto(false);

   return (
      <>
         <Wrapper>

            <ImagesContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
            </ImagesContainer>

            <AdditionalImages showMore={showMorePhotos}>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
               <ImageContainer>
                  <Image src={work} onClick={() => openFullScreen(work)} />
               </ImageContainer>
            </AdditionalImages>

            <ButtonContainer>
            <MoreButton onClick={morePhotos}>  Poka?? {showMorePhotos ? "wi??cej ???" : "mniej ???"} </MoreButton>
            </ButtonContainer>
         </Wrapper>
         
         <FullScreenWrapper fullScreenPhoto={fullScreenPhoto}>
            <CloseButton onClick={closeFullScreen}><AiOutlineClose size={35} /></CloseButton>
            <FullScreenImage src={fullScreenPhotoSrc} />
         </FullScreenWrapper>
      </>
   );
};
