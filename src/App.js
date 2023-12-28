import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/users/:userId" element={<ProfileDetails />} />
        </Routes>
    );
}

export default App;
