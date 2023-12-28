import "./LoadingCard.css";

const LoadingCard = () => {
    return (
        <div
            className="card-container-loading"
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
            }}>
            <div
                className="image-loading"
                style={{ height: "50%", width: "80%", marginTop: 25 }}></div>
            <div
                className="product-info-container-loading"
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
                    className="name-price-container-loading"
                    style={{
                        height: "50%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <i
                        className="product-name-loading"
                        style={{
                            fontSize: 24,
                            width: "50%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}></i>
                    <b className="product-price-loading"></b>
                </div>
                <span
                    className="product-description-loading"
                    style={{
                        height: "50%",
                        width: "100%",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}></span>
                <span></span>
            </div>
            <div
                className="add-to-cart-btn-container-loading"
                style={{
                    height: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "80%",
                }}>
                <div
                    className="add-to-cart-btn-loading"
                    style={{
                        width: "100%",
                        cursor: "pointer",
                        height: "50%",
                        transition: ".2s all",
                        color: "black",
                        backgroundColor: "#A6C9DE",
                    }}></div>
            </div>
        </div>
    );
};

export default LoadingCard;
