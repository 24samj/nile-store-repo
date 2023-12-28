import "boxicons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ enableSearchBar, searchString, setSearchString }) => {
    const navigate = useNavigate();
    const [profileIconType, setProfileIconType] = useState("regular");
    const [cartIconType, setCartIconType] = useState("regular");
    return (
        <div
            className="navbar-container"
            style={{
                height: "50px",
                width: "100%",
                backgroundColor: "#011638",
                display: "flex",
                alignItems: "center",
                position: "sticky",
                top: "0",
                gap: enableSearchBar ? "0" : "49.5vw",
                zIndex: 1,
            }}>
            <h1
                className="logo-container"
                style={{
                    height: "100%",
                    width: "25%",
                    display: "flex",
                    alignItems: "center",
                    color: "#F9F6F0",
                    fontSize: 24,
                    cursor: "pointer",
                    fontFamily: "Lobster",
                    letterSpacing: "3px",
                    justifyContent: "center",
                    transition: ".2s ease-in-out",
                }}
                onClick={() => navigate("/")}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.letterSpacing = "4px")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.letterSpacing = "3px")
                }>
                Nile Store
            </h1>
            {enableSearchBar && (
                <div
                    className="searchbar-container"
                    style={{
                        height: "100%",
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        color: "#F9F6F0",
                        fontSize: 24,
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}>
                    <input
                        type="text"
                        className="searchbar"
                        placeholder="Search for a product on this page"
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                        style={{
                            height: "60%",
                            width: "100%",
                            padding: 10,
                            color: "black",
                            backgroundColor: "white",
                            borderRadius: 5,
                        }}
                    />
                </div>
            )}

            <div
                className="navbar-actions-container"
                style={{
                    display: "flex",
                    gap: "5vw",
                    color: "white",
                    width: "25%",
                    justifyContent: "center",
                }}>
                <box-icon
                    type={profileIconType}
                    name="id-card"
                    color="white"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setProfileIconType("solid")}
                    onMouseLeave={() => setProfileIconType("regular")}
                    onClick={() => navigate("/users/1")}
                />
                <box-icon
                    type={cartIconType}
                    name="cart"
                    color="white"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setCartIconType("solid")}
                    onMouseLeave={() => setCartIconType("regular")}
                />
            </div>
        </div>
    );
};

export default Navbar;
