import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { categories } from "../data/data";

const CategoryList = ({Categories, onSelectedCategory}) => {
    if(!Categories) return null;

    return(
        <ListGroup>
            {Categories.map((category)=>(
                <ListGroupItem key={category.id} onClick={()=>onSelectedCategory(category)}>
                    {category.name}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default CategoryList;