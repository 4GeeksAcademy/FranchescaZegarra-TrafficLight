/*import React from "react";*/
import React, {useState} from "react";

function Circle ({color, selected, onClick}) {
    let light = "";
    if (selected) light = "lightOn";

    return (
        <div className={`circle ${color} ${light} ${selected}`} onClick={onClick} ></div>
        );
};

export default Circle;