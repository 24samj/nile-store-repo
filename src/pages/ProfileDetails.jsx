import { useEffect, useState } from "react";
import axios from "axios";
import "boxicons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const ProfileDetails = () => {
    const [userData, setUserData] = useState({
        address: {},
        email: "",
        id: Number,
        name: {},
        password: "",
        phone: "",
        username: "",
    });
    const [isEditingUser, setIsEditingUser] = useState(false);
    const [editIconType, setEditIconType] = useState("regular");
    const [isLoading, setIsloading] = useState(false);

    const fetchUserDetails = async () => {
        try {
            setIsloading(true);
            const { data } = await axios.get(
                "https://fakestoreapi.com/users/1"
            );
            setUserData(data);
        } catch (ex) {
            console.log(ex);
        } finally {
            setIsloading(false);
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <div
            className="profile-page-container"
            style={{
                height: "100vh",
                width: "100%",
            }}>
            <Navbar />
            <div
                className="profile-details-header"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "10%",
                    color: "#011638",
                    backgroundColor: "rgba(166, 201, 222)",
                    fontSize: 36,
                    fontWeight: 700,
                    paddingLeft: 80,
                    margin: 50,
                    borderRadius: 50,
                }}>
                Your Profile
                <box-icon
                    onClick={() => setIsEditingUser(!isEditingUser)}
                    name="edit-alt"
                    type={editIconType}
                    style={{
                        marginRight: "50px",
                        cursor: "pointer",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        padding: 10,
                        transition: ".2s all ease",
                        visibility: isEditingUser ? "hidden" : "visible",
                    }}
                    onMouseEnter={(e) => {
                        setEditIconType("solid");
                        e.currentTarget.style.backgroundColor =
                            "rgba(140, 169, 186)";
                    }}
                    onMouseLeave={(e) => {
                        setEditIconType("regular");
                        e.currentTarget.style.backgroundColor =
                            "rgba(166, 201, 222)";
                    }}></box-icon>
            </div>
            <div
                className="profile-details"
                style={{
                    height: "calc(90% - 150px)",
                    display: "flex",
                    border: "1px solid black",
                    borderRadius: 25,
                    margin: 50,
                    padding: 50,
                    backgroundColor: "rgba(239, 239, 240, 0.8)",
                }}>
                {isLoading ? (
                    <div
                        className="loading container"
                        style={{ width: "100%" }}>
                        <LoadingSpinner />
                    </div>
                ) : (
                    <>
                        <div
                            className="avatar-container"
                            style={{
                                height: "100%",
                                width: "40%",
                                display: "flex",
                                justifyContent: "center",
                            }}>
                            <box-icon
                                name="face"
                                style={{
                                    height: "250px",
                                    width: "250px",
                                    backgroundColor: "rgba(239, 239, 240)",
                                    borderRadius: "50%",
                                }}></box-icon>
                        </div>
                        <div
                            className="profile-details-container"
                            style={{
                                height: "100%",
                                width: "60%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            }}>
                            <div
                                className="profile-name"
                                style={{ display: "flex", width: "100%" }}>
                                <div
                                    className="firstname-container"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "50%",
                                        gap: "10px",
                                    }}>
                                    <h3>First Name:</h3>
                                    <input
                                        onChange={(e) =>
                                            setUserData((prevUserData) => ({
                                                ...prevUserData,
                                                name: {
                                                    ...prevUserData.name,
                                                    firstname: e.target.value,
                                                },
                                            }))
                                        }
                                        type="text"
                                        value={userData.name?.firstname}
                                        disabled={!isEditingUser}
                                        style={{
                                            width: "80%",
                                            height: "40px",
                                            borderRadius: 25,
                                            padding: 10,
                                            color: "black",
                                            backgroundColor: "white",
                                            boxShadow: "5px 5px 10px",
                                        }}
                                        onFocus={(e) =>
                                            (e.currentTarget.style.boxShadow =
                                                "5px 5px 15px")
                                        }
                                        onBlur={(e) =>
                                            (e.currentTarget.style.boxShadow =
                                                "5px 5px 10px")
                                        }
                                    />
                                </div>
                                <div
                                    className="lastname-container"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "50%",
                                        gap: "10px",
                                    }}>
                                    <h3>Last Name:</h3>
                                    <input
                                        onChange={(e) =>
                                            setUserData((prevUserData) => ({
                                                ...prevUserData,
                                                name: {
                                                    ...prevUserData.name,
                                                    lastname: e.target.value,
                                                },
                                            }))
                                        }
                                        type="text"
                                        value={userData.name?.lastname}
                                        disabled={!isEditingUser}
                                        style={{
                                            width: "80%",
                                            height: "40px",
                                            borderRadius: 25,
                                            padding: 10,
                                            color: "black",
                                            backgroundColor: "white",
                                            boxShadow: "5px 5px 10px",
                                        }}
                                        onFocus={(e) =>
                                            (e.currentTarget.style.boxShadow =
                                                "5px 5px 15px")
                                        }
                                        onBlur={(e) =>
                                            (e.currentTarget.style.boxShadow =
                                                "5px 5px 10px")
                                        }
                                    />
                                </div>
                            </div>
                            <div
                                className="profile-email"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}>
                                <h3>Email:</h3>
                                <input
                                    onChange={(e) =>
                                        setUserData((prevUserData) => ({
                                            ...prevUserData,
                                            email: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    value={userData?.email}
                                    disabled={!isEditingUser}
                                    style={{
                                        width: "40%",
                                        height: "40px",
                                        borderRadius: 25,
                                        padding: 10,
                                        color: "black",
                                        backgroundColor: "white",
                                        boxShadow: "5px 5px 10px",
                                    }}
                                    onFocus={(e) =>
                                        (e.currentTarget.style.boxShadow =
                                            "5px 5px 15px")
                                    }
                                    onBlur={(e) =>
                                        (e.currentTarget.style.boxShadow =
                                            "5px 5px 10px")
                                    }
                                />
                            </div>
                            <div
                                className="profile-contact-number"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}>
                                <h3>Contact number:</h3>
                                <input
                                    onChange={(e) =>
                                        setUserData((prevUserData) => ({
                                            ...prevUserData,
                                            phone: e.target.value,
                                        }))
                                    }
                                    type="text"
                                    value={userData?.phone}
                                    disabled={!isEditingUser}
                                    style={{
                                        width: "40%",
                                        height: "40px",
                                        border: "1px solid black",
                                        borderRadius: 25,
                                        padding: 10,
                                        color: "black",
                                        backgroundColor: "white",
                                        boxShadow: "5px 5px 10px",
                                    }}
                                    onFocus={(e) =>
                                        (e.currentTarget.style.boxShadow =
                                            "5px 5px 15px")
                                    }
                                    onBlur={(e) =>
                                        (e.currentTarget.style.boxShadow =
                                            "5px 5px 10px")
                                    }
                                />
                            </div>
                            <div
                                className="profile-change-btns"
                                style={{
                                    visibility: isEditingUser
                                        ? "visible"
                                        : "hidden",
                                    width: "40%",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    marginTop: 30,
                                }}>
                                <button
                                    onClick={() => setIsEditingUser(false)}
                                    style={{
                                        padding: 10,
                                        borderRadius: 10,
                                        backgroundColor: "rgba(166, 201, 222)",
                                        border: "1px solid black",
                                        color: "black",
                                        cursor: "pointer",
                                    }}>
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        setIsEditingUser(false);
                                        console.log(userData);
                                    }}
                                    style={{
                                        padding: 10,
                                        borderRadius: 10,
                                        backgroundColor: "rgba(166, 201, 222)",
                                        border: "1px solid black",
                                        color: "black",
                                        cursor: "pointer",
                                    }}>
                                    Confirm changes
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ProfileDetails;
