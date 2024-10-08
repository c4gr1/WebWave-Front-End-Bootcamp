import React from "react";

function ChildComponent(props){
    return(
        <div>
            <h2>This is child component.</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default ChildComponent;