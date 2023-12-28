import { useNavigate } from "react-router-dom";

const ProductCard = ({
    imageUrl,
    title,
    description,
    price,
    rating,
    productId,
}) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/products/${productId}`)}
            className="card-container"
            style={{
                height: "400px",
                width: "250px",
                border: "1px solid black",
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                transition: ".2s all",
                boxShadow: "0px 0px 10px rgba(1,22,56, 0.3)",
            }}
            onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
            <div
                className="image"
                style={{ height: "50%", width: "80%", marginTop: 25 }}>
                <img
                    src={imageUrl}
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                />
            </div>

            <div
                className="product-info-container"
                style={{
                    height: "30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "80%",
                    gap: 5,
                    marginTop: 10,
                }}>
                <div
                    className="name-price-container"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <i
                        className="product-name"
                        style={{
                            fontSize: 24,
                            width: "50%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}>
                        {title}
                    </i>
                    <b className="product-price">${price.toFixed(2)}</b>
                </div>

                <span
                    className="product-description"
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}>
                    {description}
                </span>
                <span style={{ textAlign: "right" }}>
                    ★{rating ? rating.toFixed(1) : ""}
                </span>
            </div>
            <div
                className="add-to-cart-btn-container"
                style={{
                    height: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                }}>
                <button
                    className="add-to-cart-btn"
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        border: "1px solid #011638",
                        borderRadius: 10,
                        height: "50%",
                        transition: ".2s all",
                        color: "black",
                        backgroundColor: "#A6C9DE",
                    }}
                    onMouseOver={(e) => (
                        (e.currentTarget.style.backgroundColor = "#011638"),
                        (e.currentTarget.style.color = "#F9F6F0"),
                        (e.currentTarget.style.border = "2px solid #A6C9DE")
                    )}
                    onMouseOut={(e) => (
                        (e.currentTarget.style.backgroundColor = "#A6C9DE"),
                        (e.currentTarget.style.color = "initial"),
                        (e.currentTarget.style.border = "2px solid #011638")
                    )}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
