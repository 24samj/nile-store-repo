import LoadingCard from "./LoadingCard";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ products, isLoading }) => {
    return (
        <div
            className="products-container"
            style={{
                height: "100%",
                margin: 50,
                display: "flex",
                gap: 50,
                justifyContent: "space-evenly",
                flexWrap: "wrap",
            }}>
            {isLoading ? (
                <>
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                    <LoadingCard />
                </>
            ) : products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        imageUrl={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        rating={product.rating.rate}
                        productId={product.id}
                    />
                ))
            ) : (
                <h2 style={{ height: "25vh" }}>
                    No products matched your search.
                </h2>
            )}
        </div>
    );
};

export default ProductsContainer;
