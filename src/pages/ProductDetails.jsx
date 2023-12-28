import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";
import "boxicons";

const ProductDetails = () => {
    const { productId } = useParams();
    const [productInfo, setProductInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRotation, setSelectedRotation] = useState(0);
    const fetchProductDetails = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                `https://fakestoreapi.com/products/${productId}`
            );
            setProductInfo(data);
            console.log(data);
        } catch (ex) {
            console.log(ex);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchProductDetails();
    }, []);

    const ImageShowcase = () => {
        const smallImageStyles = {
            border: "1px solid black",
            borderRadius: 10,
            padding: 10,
            aspectRatio: 1 / 1,
            cursor: "pointer",
        };
        return (
            <div
                className="display-container"
                style={{
                    height: "100%",
                    width: "60%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 10,
                }}>
                <img
                    src={productInfo.image}
                    alt=""
                    width={"100%"}
                    style={{
                        transform: `rotate(${selectedRotation}deg)`,
                        padding: 10,
                        aspectRatio: 1 / 1,
                    }}
                />
                <div
                    className="extra-images"
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <img
                        src={productInfo.image}
                        alt=""
                        width={"20%"}
                        style={{
                            ...smallImageStyles,
                            boxShadow: "0px 0px 10px rgba(1,22,56, 0.3)",
                            border:
                                selectedRotation === 0
                                    ? "3px solid black"
                                    : "1px solid black",
                        }}
                        onMouseEnter={() => {
                            setSelectedRotation(0);
                        }}
                    />
                    <img
                        src={productInfo.image}
                        alt=""
                        width={"20%"}
                        style={{
                            ...smallImageStyles,
                            transform: "rotate(90deg)",
                            boxShadow: "0px 0px 10px rgba(1,22,56, 0.3)",
                            border:
                                selectedRotation === 90
                                    ? "3px solid black"
                                    : "1px solid black",
                        }}
                        onMouseEnter={() => {
                            setSelectedRotation(90);
                        }}
                    />
                    <img
                        src={productInfo.image}
                        alt=""
                        width={"20%"}
                        style={{
                            ...smallImageStyles,
                            transform: "rotate(180deg)",
                            boxShadow: "0px 0px 10px rgba(1,22,56, 0.3)",
                            border:
                                selectedRotation === 180
                                    ? "3px solid black"
                                    : "1px solid black",
                        }}
                        onMouseEnter={() => {
                            setSelectedRotation(180);
                        }}
                    />
                    <img
                        src={productInfo.image}
                        alt=""
                        width={"20%"}
                        style={{
                            ...smallImageStyles,
                            transform: "rotate(270deg)",
                            boxShadow: "0px 0px 10px rgba(1,22,56, 0.3)",
                            border:
                                selectedRotation === 270
                                    ? "3px solid black"
                                    : "1px solid black",
                        }}
                        onMouseEnter={() => {
                            setSelectedRotation(270);
                        }}
                    />
                </div>
            </div>
        );
    };

    const RatingDisplay = () => {
        const rating = productInfo?.rating?.rate;
        return (
            <div
                className="star-rating-container"
                style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                color: index <= rating ? "#000" : "#ccc",
                            }}
                            type="button"
                            key={index}>
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
                <h4 style={{ marginLeft: 10 }}>{productInfo?.rating?.rate}</h4>
                <h5 style={{ marginLeft: 10 }}>
                    {productInfo?.rating?.count} ratings
                </h5>
            </div>
        );
    };

    const OfferCard = ({ offerTitle, offerInfo }) => {
        return (
            <div
                className="card-container"
                style={{
                    height: "100%",
                    width: "100%",
                    border: "1px solid black",
                    borderRadius: 10,
                    padding: 5,
                    cursor: "pointer",
                    transition: ".2s all ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                }}>
                <h4>{offerTitle}</h4>
                <p>{offerInfo}</p>
            </div>
        );
    };

    const OffersDisplay = () => {
        return (
            <div
                className="row-container"
                style={{
                    display: "flex",
                    gap: 10,
                    height: "100%",
                    width: "100%",
                }}>
                <OfferCard
                    offerTitle={"Cashback"}
                    offerInfo={`$${(productInfo.price * 0.1).toFixed(
                        2
                    )} as cashback from select providers!`}
                />
                <OfferCard
                    offerTitle={"Bank Offer"}
                    offerInfo={`Upto $${(productInfo.price * 0.2).toFixed(
                        2
                    )} discount on select Credit Cards!`}
                />
                <OfferCard
                    offerTitle={"Partner Offers"}
                    offerInfo={`Get GST invoice and save up to 28% on business purchases.`}
                />
            </div>
        );
    };

    const PurchaseButton = ({ text, textColor, bgColor, borderColor }) => {
        return (
            <button
                style={{
                    height: 35,
                    backgroundColor: bgColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: 15,
                    color: textColor,
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: 700,
                }}>
                {text}
            </button>
        );
    };

    return (
        <div
            className="page-container"
            style={{ height: "calc(100vh - 50px)", width: "100%" }}>
            <Navbar />
            <div
                className="info-images-container"
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    padding: 50,
                }}>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <div
                            className="images-container"
                            style={{
                                height: "60%",
                                width: "30%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <ImageShowcase />
                        </div>
                        <div
                            className="product-details-container"
                            style={{
                                height: "60%",
                                width: "40%",
                                padding: 20,
                            }}>
                            <div
                                className="name-rating-category"
                                style={{
                                    height: "35%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: "5px",
                                }}>
                                <h2>{productInfo.title}</h2>
                                <RatingDisplay />
                                <i>in {productInfo.category?.toUpperCase()}</i>
                            </div>
                            <hr />
                            <div
                                className="price-emi-info"
                                style={{
                                    height: "35%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: "2px",
                                }}>
                                <h2>${productInfo.price?.toFixed(2)}</h2>
                                <p>Inclusive of all taxes.</p>
                                {productInfo?.price > 50 && (
                                    <i>
                                        <strong>EMI</strong> starts at $
                                        {(productInfo.price / 12).toFixed(2)}{" "}
                                        per month.
                                    </i>
                                )}
                            </div>
                            <div
                                className="offers-container"
                                style={{
                                    height: "40%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: 10,
                                }}>
                                <h3>Offers!</h3>
                                <OffersDisplay />
                            </div>
                        </div>
                        <div
                            className="price-checkout-container"
                            style={{
                                width: "30%",
                                padding: 10,
                                display: "flex",
                                flexDirection: "column",
                                gap: "1vh",
                                border: "1px solid black",
                                borderRadius: 25,
                                marginTop: 50,
                                marginLeft: 50,
                                marginRight: 50,
                            }}>
                            <h2 className="final-price">
                                $
                                {
                                    productInfo?.price
                                        ?.toFixed(2)
                                        .toString()
                                        .split(".")[0]
                                }
                                <sup style={{ fontSize: 14 }}>
                                    {
                                        productInfo?.price
                                            ?.toFixed(2)
                                            .toString()
                                            .split(".")[1]
                                    }
                                </sup>
                            </h2>

                            <p className="delivery-date">
                                Delivery by{" "}
                                <b>
                                    {new Date(
                                        Date.now() + 7 * 24 * 60 * 60 * 1000
                                    ).toLocaleDateString(undefined, {
                                        month: "short",
                                        day: "2-digit",
                                        year: "numeric",
                                    })}
                                </b>
                            </p>
                            <span
                                className="delivery-pincode"
                                style={{
                                    display: "flex",
                                    gap: 5,
                                    alignItems: "center",
                                }}>
                                <box-icon name="current-location" />
                                Deliver to 110001
                            </span>
                            <h3
                                className="instock-banner"
                                style={{
                                    border: "1px solid black",
                                    borderRadius: 10,
                                    padding: 10,
                                    margin: 5,
                                    color: "green",
                                }}>
                                In Stock
                            </h3>
                            <div className="qunatity-selector">
                                Quantity:
                                <select
                                    name="quantity"
                                    id="quantity"
                                    style={{
                                        marginLeft: 10,
                                    }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div
                                className="purchase-btns-container"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: "3vh",
                                    padding: 10,
                                }}>
                                <PurchaseButton
                                    text={"Add to Cart"}
                                    textColor={"black"}
                                    bgColor={"orange"}
                                    borderColor={"orange"}
                                />
                                <PurchaseButton
                                    text={"Buy Now"}
                                    textColor={"black"}
                                    bgColor={"yellow"}
                                    borderColor={"yellow"}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
