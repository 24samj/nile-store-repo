import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";
import ProductsContainer from "../components/ProductsContainer";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const CategoryPage = () => {
    const { category } = useParams();
    const [categorizedProductsData, setCategorizedProductData] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [sortOption, setSortOption] = useState("name");
    const [isLoading, setIsLoading] = useState(false);

    const fetchProductsInCategory = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(
                `https://fakestoreapi.com/products/category/${category}`
            );
            setCategorizedProductData(data);
        } catch (ex) {
            console.error(ex);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredData = () => {
        switch (sortOption) {
            case "name":
                return [...categorizedProductsData].sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
            case "rating":
                return [...categorizedProductsData].sort(
                    (a, b) => b.rating.rate - a.rating.rate
                );
            case "price1":
                return [...categorizedProductsData].sort(
                    (a, b) => a.price - b.price
                );
            case "price2":
                return [...categorizedProductsData].sort(
                    (a, b) => b.price - a.price
                );
            default:
                return [...categorizedProductsData];
        }
    };

    useEffect(() => {
        fetchProductsInCategory();
    }, [category]);

    const sortedProducts = filteredData();
    const searchedProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
        <div
            className="page-container"
            style={{ height: "100%", width: "100%" }}>
            <Navbar
                enableSearchBar
                searchString={searchString}
                setSearchString={setSearchString}
            />
            <div
                className="sidebar-page-container"
                style={{ width: "100%", display: "flex" }}>
                <Sidebar
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                />
                <div
                    className="header-products-container"
                    style={{ width: "85%", height: "100%" }}>
                    <div
                        className="category-header"
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
                        {category.toUpperCase()} Category
                    </div>
                    <ProductsContainer
                        products={searchedProducts}
                        isLoading={isLoading}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CategoryPage;
