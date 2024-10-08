import React from "react";

function MessageComponent(props){
    return(
        <div>
            <h2>Coming Message</h2>
            <p>{props.message}</p>
        </div>
    );
}

MessageComponent.defaultProps = {
    message: "Default Message"
};
export default MessageComponent;