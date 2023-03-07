import { Image, ImageContainer, Wrapper } from "./styledHome";
import first from './img/1.jpg';
import second from './img/2.jpg';
import third from './img/3.jpg';
import { useEffect, useState } from "react";

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
                ))}
            </ImageContainer>
        </Wrapper>
    );
};
