import React from "react";
import ChildComponent from "./ChildComponent";

//<ChildComponent></ChildComponent> and <ChildComponent/> these are same meaning
function ParentComponent(){
    return(
        <div>
            <h1>This is parent component.</h1>
 
            <ChildComponent name = "Cagri" age={25}/>
            <ChildComponent name = "Yıldız" age={35}/>
        </div>
    );
}

export default ParentComponent;