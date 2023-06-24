import React from "react";

function Container({children}){
    return(
    <div className="container">
        <div className="row justify-content-center">
            <div className="line"></div>
        </div>
        <div className="d-flex justify-content-center">
            <div className="box bg-black p-2 rounded-4">
                {children}
            </div>
        </div>
    </div>);
};

export default Container;