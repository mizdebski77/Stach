import { Image, ImagesWrapper, ImageWrapper, More, MoreText, Span, Wrapper } from "./styledServices"
import koparka from "./img/koparka.jpg"
import { useState } from "react"

export const Services = () => {

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolorin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const [showMore, setShowMore] = useState([
        { id: 1, isExpanded: true },
        { id: 2, isExpanded: true },
        { id: 3, isExpanded: true },
        { id: 4, isExpanded: true },
    ]);


    const showMoreText = (id) => {
        const updatedState = showMore.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    isExpanded: !item.isExpanded,
                };
            }
            return item;
        });
        setShowMore(updatedState);
    };



    return (

        <Wrapper>
            <ImagesWrapper>
                <ImageWrapper >
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką gąsienicową</Span>
                    <MoreText readMore={showMore[0].isExpanded}><p>
                        {text}
                    </p>  </MoreText>
                    <More onClick={() => showMoreText(1)}>Pokaż {showMore[0].isExpanded ? "więcej ↓" : "mniej  ↑"}  </More>
                </ImageWrapper>

                <ImageWrapper >
                    <Image src={koparka}></Image>
                    <Span> Usługi  gąsienicową</Span>
                    <MoreText readMore={showMore[1].isExpanded}><p>
                        {text}
                    </p>  </MoreText>
                    <More onClick={() => showMoreText(2)}>Pokaż {showMore[1].isExpanded ? "więcej ↓" : "mniej  ↑"}  </More>
                </ImageWrapper>

                <ImageWrapper >
                    <Image src={koparka}></Image>
                    <Span> Usługi koparką </Span>
                    <MoreText readMore={showMore[2].isExpanded}><p>
                        {text}
                    </p>  </MoreText>
                    <More onClick={() => showMoreText(3)}>Pokaż {showMore[2].isExpanded ? "więcej ↓" : "mniej  ↑"}  </More>
                </ImageWrapper>

                <ImageWrapper >
                    <Image src={koparka}></Image>
                    <Span>  koparką gąsienicową</Span>
                    <MoreText readMore={showMore[3].isExpanded}><p>
                        {text}
                    </p>  </MoreText>
                    <More onClick={() => showMoreText(4)}>Pokaż {showMore[3].isExpanded ? "więcej ↓" : "mniej  ↑"}  </More>
                </ImageWrapper>

            </ImagesWrapper>
        </Wrapper>

    )
}
