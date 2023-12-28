import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Carousel = ({ allProductsData, isLoading }) => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [carouselProductsData, setCarouselProductsData] = useState([]);

    // const [intervalId, setIntervalId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        let allProductsDataCopy = [...allProductsData];
        let newCarouselProductsData = [];

        while (
            newCarouselProductsData.length < 5 &&
            allProductsDataCopy.length > 0
        ) {
            let randomIndex = Math.floor(
                Math.random() * allProductsDataCopy.length
            );
            newCarouselProductsData.push(allProductsDataCopy[randomIndex]);
            allProductsDataCopy.splice(randomIndex, 1);
        }

        setCarouselProductsData(newCarouselProductsData);
    }, [allProductsData]);

    // const startAutoSlideChange = () => {
    //     const id = setInterval(() => {
    //         nextProduct();
    //     }, 3000); // Change slide every 3 seconds
    //     setIntervalId(id);
    // };

    // const stopAutoSlideChange = () => {
    //     clearInterval(intervalId);
    // };

    const nextProduct = () => {
        setCurrentProductIndex(
            (currentProductIndex + 1) % carouselProductsData.length
        );
        console.log(currentProductIndex);
    };

    const previousProduct = () => {
        setCurrentProductIndex(
            (currentProductIndex - 1 + carouselProductsData.length) %
                carouselProductsData.length
        );
    };

    // useEffect(() => {
    //     startAutoSlideChange();

    //     // Clean up the interval when the component unmounts
    //     return () => {
    //         stopAutoSlideChange();
    //     };
    // }, []);

    return (
        <div
            className="carousel-container"
            style={{
                height: "250px",
                margin: 50,
                display: "flex",
                justifyContent: "space-around",
                border: "5px solid #011638",
                alignItems: "center",
                borderRadius: 25,
            }}>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <button
                        onClick={previousProduct}
                        style={{
                            position: "absolute",
                            left: 5 + 50,
                            height: 240,
                            width: "10%",
                            fontSize: 36,
                            color: "black",
                            background: "transparent",
                            borderColor: "transparent",
                            cursor: "pointer",
                            borderRadius: 20,
                            transition: ".2s all ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                "rgba(239, 239, 240)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                        }}>
                        {"<"}
                    </button>

                    <div
                        onClick={() =>
                            navigate(
                                `/products/${carouselProductsData[currentProductIndex].id}`
                            )
                        }
                        style={{
                            height: "100%",
                            width: "80%",
                            display: "flex",
                            justifyContent: "space-around",
                            borderRadius: 20,
                            transition: ".2s all ease",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                "rgba(239, 239, 240)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                        }}>
                        <div
                            className="img-container"
                            style={{
                                height: "100%",
                                width: "20%",
                                padding: 30,
                            }}>
                            <img
                                src={
                                    carouselProductsData[currentProductIndex]
                                        ?.image
                                }
                                alt=""
                                height={"100%"}
                                width={"100%"}
                            />
                        </div>
                        <div
                            className="carousel-pdt-info"
                            style={{
                                height: "100%",
                                width: "20%",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                            }}>
                            <h3>
                                {
                                    carouselProductsData[currentProductIndex]
                                        ?.title
                                }
                            </h3>
                            <h1>
                                $
                                {carouselProductsData[
                                    currentProductIndex
                                ]?.price?.toFixed(2)}
                            </h1>
                        </div>
                    </div>

                    <button
                        onClick={nextProduct}
                        style={{
                            position: "absolute",
                            right: 4 + 50,
                            height: 240,
                            width: "10%",
                            fontSize: 36,
                            color: "black",
                            background: "transparent",
                            borderColor: "transparent",
                            cursor: "pointer",
                            borderRadius: 20,
                            transition: ".2s all ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                "rgba(239, 239, 240)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                        }}>
                        {">"}
                    </button>
                </>
            )}
        </div>
    );
};

export default Carousel;
