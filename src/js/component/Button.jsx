import React from "react";

function Button ({text, color, onClick}) {
    return(
        <button type="button" class={`btn ${color}`} onClick={onClick}>{text}</button>
    );
};

export default Button;