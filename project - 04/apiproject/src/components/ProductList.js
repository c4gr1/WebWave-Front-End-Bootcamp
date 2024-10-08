import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import CartContext from "../context/CartContext";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";


function ProductList(){

    const [products, setProduct] = useState([]);
    const {category} = useParams();
    const {addToCart} = React.useContext(CartContext);

    useEffect(()=>{
        const url = category === "all" || !category 
        ? "https://fakestoreapi.com/products" 
        : `https://fakestoreapi.com/products/category/${category}`;

        fetch(url)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [category]);

    return(
        <div>
            <h1>{category}</h1>
            <Row>
                {products.length > 0 ? (products.map(product => (<Col sm="4" key={product.id} className="mb-4">
                <ProductItem product= {product} addToCart={addToCart}></ProductItem>
                </Col>))
                ) :
                (<p>No products available in this category</p>
                
            )}
            </Row>
        </div>
    );

};

export default ProductList;
