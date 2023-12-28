// Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ category }) => {
    const breadcrumbParts = category.split("/");

    const breadcrumbs = [
        {
            name: "Home",
            path: "/",
        },
    ];

    breadcrumbParts.forEach((part, index) => {
        const path = `/${breadcrumbParts.slice(0, index + 1).join("/")}`;
        breadcrumbs.push({
            name: part.toUpperCase(),
            path,
        });
    });

    return (
        <div
            className="breadcrumb-container"
            style={{ display: "flex", gap: "1vw" }}>
            {breadcrumbs.map((breadcrumb, index) => (
                <div key={index}>
                    {index > 0 && (
                        <span className="breadcrumb-separator"> / </span>
                    )}
                    {index === breadcrumbs.length - 1 ? (
                        <span className="breadcrumb-current">
                            {breadcrumb.name}
                        </span>
                    ) : (
                        <Link to={breadcrumb.path} className="breadcrumb-link">
                            {breadcrumb.name}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Breadcrumb;
