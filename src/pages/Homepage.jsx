import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import CategoryBar from "../components/CategoryBar";
import Navbar from "../components/Navbar";
import axios from "axios";
import ProductsContainer from "../components/ProductsContainer";
import Footer from "../components/Footer";

const Homepage = () => {
    const [allProductsData, setAllProductsData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllProductsData = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                "https://fakestoreapi.com/products"
            );
            setAllProductsData(data);
        } catch (ex) {
            console.log(ex);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchAllCategories = async () => {
        try {
            const { data } = await axios.get(
                "https://fakestoreapi.com/products/categories"
            );
            setCategories(data);
        } catch (ex) {
            console.log(ex);
        }
    };

    const filteredData = allProductsData.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
    );

    useEffect(() => {
        fetchAllProductsData();
        fetchAllCategories();
    }, []);

    return (
        <div className="homepage-container">
            <Navbar
                enableSearchBar
                searchString={searchString}
                setSearchString={setSearchString}
            />
            <CategoryBar
                categories={categories}
                allProductsData={allProductsData}
            />
            <Carousel allProductsData={allProductsData} isLoading={isLoading} />
            <div
                className="trending-header"
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100px",
                    color: "#011638",
                    backgroundColor: "#A6C9DE",
                    fontSize: 36,
                    fontWeight: 700,
                    paddingLeft: 80,
                    margin: 50,
                    borderRadius: 50,
                }}>
                Trending Products
            </div>
            <ProductsContainer products={filteredData} isLoading={isLoading} />
            <Footer />
        </div>
    );
};

export default Homepage;
