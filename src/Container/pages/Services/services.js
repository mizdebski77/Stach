import { Image, ImagesWrapper, ImageWrapper, More, MoreText, Paragraph, Span, Title, Wrapper } from "./styledServices"
import koparka from "./img/koparka.jpg"
import { useState } from "react"

export const Services = () => {

    const [showMore, setShowMore] = useState(true);

    const showMoreText = () => {
        setShowMore(!showMore);
    }
    return (

        <Wrapper>
            <ImagesWrapper>
                <ImageWrapper >
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką gąsienicową</Span>
                    <MoreText readMore={showMore}><Paragraph>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Paragraph> </MoreText>
                    <More onClick={showMoreText}>Pokaż {showMore ? "więcej ↓" : "mniej  ↑"}  </More>
                </ImageWrapper>
                <ImageWrapper >
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką gąsienicową</Span>
                    <MoreText readMore={showMore}><Paragraph>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Paragraph>  </MoreText>
                    <More onClick={showMoreText}>Pokaż {showMore ? "więcej ↓" : "mniej  ↑"}  </More>
                </ImageWrapper>
                <ImageWrapper >
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką gąsienicową</Span>
                    <MoreText readMore={showMore}><Paragraph>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Paragraph> </MoreText>
                    <More onClick={showMoreText}>Pokaż {showMore ? "więcej ↓" : "mniej  ↑"}  </More>
                </ImageWrapper>
                <ImageWrapper >
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką gąsienicową</Span>
                    <MoreText readMore={showMore}><Paragraph>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Paragraph> </MoreText>
                    <More onClick={showMoreText}>Pokaż {showMore ? "więcej ↓" : "mniej  ↑"}  </More>
                </ImageWrapper>

            </ImagesWrapper>
        </Wrapper>

    )
}