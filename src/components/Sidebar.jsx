import React from "react";

const Sidebar = ({ sortOption, setSortOption }) => {
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div
            className="sidebar-container"
            style={{
                backgroundColor: "#011638",
                color: "#F9F6F0",
                height: "100%",
                width: "15%",
                border: "1px solid blue",
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                padding: 10,
                margin: 25,
                position: "sticky",
                top: 75,
                zIndex: 0,
            }}>
            Sort by:
            <label>
                <input
                    type="radio"
                    name="sortOption"
                    value="name"
                    checked={sortOption === "name"}
                    onChange={handleSortChange}
                />
                Name
            </label>
            <label>
                <input
                    type="radio"
                    name="sortOption"
                    value="rating"
                    checked={sortOption === "rating"}
                    onChange={handleSortChange}
                />
                Rating
            </label>
            <label>
                <input
                    type="radio"
                    name="sortOption"
                    value="price1"
                    checked={sortOption === "price1"}
                    onChange={handleSortChange}
                />
                Price - Low to High
            </label>
            <label>
                <input
                    type="radio"
                    name="sortOption"
                    value="price2"
                    checked={sortOption === "price2"}
                    onChange={handleSortChange}
                />
                Price - High to Low
            </label>
        </div>
    );
};

export default Sidebar;
