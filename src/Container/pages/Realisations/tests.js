import { useState } from "react";
import {Modal,  Wrapper, Container,  ImageContainer, AdditionalImages, Image, MoreButton, CloseButton, ModalContent } from "./styledRealisations"
import work from "./work.jpg";



export const Realistaions = ({src, alt}) => {

   const [isOpen, setIsOpen] = useState(false);

   const handleOpenModal = () => setIsOpen(true);
   const handleCloseModal = () => setIsOpen(false);
 
   return (
     <>
     <Wrapper>
     <img src={work}  style={{ width: '100%', maxWidth: '300px' }} onClick={handleOpenModal} />
 
 <Modal isOpen={isOpen}>
   <CloseButton onClick={handleCloseModal}>x</CloseButton>
   <ModalContent src={work} />
   <div id="caption">{alt}</div>
 </Modal>
     </Wrapper>

     </>
   );
 };

 import styled, { css } from "styled-components";

export const Wrapper = styled.section`
background:  #252A32;
padding-top:100px ;
min-height: 100vh;
`;


export const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalContent = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 1000px;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 100px;
  right: 35px;
  color: white;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
`;


 



































   //  const [showMorePhotos, setShowMorePhotos] = useState(true);
   //  const [fullScreen, setFullScreen] = useState(false);
   //  const [imageIndex, setImageIndex] = useState(-1);


   //  const applyFullScreen = (index) => {
   //      setFullScreen(!fullScreen);
   //      setImageIndex(index);
   //  };

   //  const morePhotos = () => {
   //      setShowMorePhotos(!showMorePhotos);
   //  };


   //  return (
   //      <Wrapper>
   //          <Container >
   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 0} onClick={() => applyFullScreen(0)}>
   //                 <Image fullScreenImage = {fullScreen} src={work} />
   //              </ImageContainer>

   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 1} onClick={() => applyFullScreen(1)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>

   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 2} onClick={() => applyFullScreen(2)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>

   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 3} onClick={() => applyFullScreen(3)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>
   //          </Container>

   //          <AdditionalImages showMore={showMorePhotos}>
   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 4} onClick={() => applyFullScreen(1)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>

   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 5} onClick={() => applyFullScreen(5)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>

   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 6} onClick={() => applyFullScreen(6)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>

   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 7} onClick={() => applyFullScreen(7)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>

   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 8} onClick={() => applyFullScreen(8)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>
                
   //              <ImageContainer fullScreenImage={fullScreen && imageIndex === 9} onClick={() => applyFullScreen(9)}>
   //                 <Image fullScreenImage = {fullScreen}src={work} />
   //              </ImageContainer>
   //          </AdditionalImages>
   //          <MoreButton onClick={morePhotos}>  Pokaż {showMorePhotos ? "więcej ↓" : "mniej ↑"} </MoreButton>
