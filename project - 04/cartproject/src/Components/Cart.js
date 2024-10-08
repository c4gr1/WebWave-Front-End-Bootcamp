import React from "react";
import alertify from "alertifyjs";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const Cart = ({cartItems, onRemoveFromCart, onClearCart}) =>{
    const totalPrice = cartItems.reduce((total,item) => total + item.price, 0);

    const handleRemoveFromCart = (item) =>{
        onRemoveFromCart(item);
        alertify.error(`${item.name} removed from cart`);
    }

    const handleClearCart = ()=>{
        onClearCart();
        alertify.error("Cart cleared")
    }

    return(
        <div>
            <h3>Cart</h3>
            <ListGroup>
                {cartItems.map((item)=>(
                    <ListGroupItem key={item.id}>{item.name} - {item.price}
                    <Button color="danger" onClick={()=> handleRemoveFromCart(item)} style={{float:"right"}}> Remove
                    </Button>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <h4>Total: ${totalPrice}</h4>
            <Button color="primary" onClick={handleClearCart}>
                Remove Cart
            </Button>
        </div>
    );
}

export default Cart;