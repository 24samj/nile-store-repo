import { useLocation } from "react-router-dom";
import BackHomeButton from "./BackHomeButton";

const Footer = () => {
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Use smooth scrolling
        });
    };
    return (
        <div
            className="footer-container"
            style={{
                height: "100px",
                width: "100%",
                backgroundColor: "#011638",
            }}>
            <div
                className="back-to-top-container"
                style={{
                    height: "30%",
                    width: "100%",
                    color: "#F9F6F0",
                    backgroundColor: "#0C7489",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1c889e")
                }
                onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0C7489")
                }
                onClick={scrollToTop}>
                Back to Top
            </div>
            <div
                className="data-copyright-container"
                style={{
                    height: "70%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    color: "#F9F6F0",
                }}>
                <div className="company-name">Nile Incorporated Pvt. Ltd.</div>
                {location.pathname !== "/" && <BackHomeButton />}
                <div className="copyright">©Nile Store 2023</div>
            </div>
        </div>
    );
};

export default Footer;
