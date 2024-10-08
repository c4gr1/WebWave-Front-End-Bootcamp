import React, { useState } from "react";

function CounterComponent(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={()=>setCount(count + 1)}>Increase Counter</button>
        </div>
    );
}

export default CounterComponent;