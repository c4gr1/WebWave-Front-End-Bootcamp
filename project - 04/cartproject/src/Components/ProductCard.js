import alertify from "alertifyjs";
import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const ProductCard = ({product, onAddToCart}) => {
    const handleAddToCart = () =>{
        onAddToCart(product);
        alertify.success(`${product.name} added to cart`);
    }
    
    return(
        <Card style={{margin: "10px"}}>
            <img src={product.image} alt={product.name} style={{width: "100%"}}></img>
            <CardBody>
                <CardTitle>
                    {product.name}
                </CardTitle>
                <CardText>{product.price}</CardText>
                <Button onClick={handleAddToCart}>Add to Cart</Button>
            </CardBody>
        </Card>
    );
}

export default ProductCard;