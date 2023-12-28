import { useNavigate } from "react-router-dom";
import "./BackHomeButton.css";

const BackHomeButton = () => {
    const navigate = useNavigate();
    window.onerror = function (message, source, lineno, colno, error) {
        alert(
            `An error occurred: ${message}\nAt: ${source}:${lineno}:${colno}`
        );
        return false;
    };
    return (
        <div
            onClick={() => {
                navigate("/");
            }}
            className="back-home-btn-container"
            style={{
                position: "absolute",
            }}>
            <button
                className="back-home-btn"
                style={{ padding: 10, color: "black", cursor: "pointer" }}>
                Go back Home
            </button>
        </div>
    );
};

export default BackHomeButton;
