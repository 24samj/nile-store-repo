import { useNavigate } from "react-router-dom";

const CategoryBar = ({ categories, allProductsData }) => {
    const navigate = useNavigate();
    return (
        <div
            className="catbar-container"
            style={{
                height: "50px",
                width: "100%",
                backgroundColor: "#0C7489",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: "5vw",
            }}>
            {categories.map((category, index) => (
                <i
                    key={index + 1}
                    href={category}
                    style={{
                        cursor: "pointer",
                        fontSize: 18,
                        fontWeight: 600,
                        padding: 10,
                        backgroundColor: "rgba(12, 116, 137)",
                        transition: ".2s all ease",
                        color: "white",
                        height: "80%",
                        display: "flex",
                        alignItems: "center",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                            "rgba(10, 93, 110)")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor =
                            "rgba(12, 116, 137)")
                    }
                    onClick={() => navigate(`/${category}`)}>
                    {category.toUpperCase()}
                </i>
            ))}
        </div>
    );
};

export default CategoryBar;
