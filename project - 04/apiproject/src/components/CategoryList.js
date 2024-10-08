import React, {useState, useEffect} from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryList(){
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => setCategories(data));
    }, []);

    return(
        <div>
            <h2>Categories</h2>
            <ListGroup style={{display: "flex", flexDirection: "row", overflowX:"auto"}}>
                <ListGroupItem style={{marginRight:"1rem"}}>
                    <Link to="/">All</Link>    
                </ListGroupItem>
                {categories.map(category =>(
                    <ListGroupItem key= {category} stylee={{marginRight: "1rem"}}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </ListGroupItem>
                ))}    
            </ListGroup>
        </div>
    );
}

export default CategoryList;