import React from "react";

function Button ({text, color, onClick}) {
    return(
        <button type="button" class={`btn m-3 ${color}`} onClick={onClick}>{text}</button>
    );
};

export default Button;