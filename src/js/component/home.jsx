/*import React from "react";*/
import React, { useState } from "react";
import Circle from "./circle"

//create your first component
const Home = () => {
	const [selectedCircle, setSelectedCircle]= useState(0);
	const [activeCircle, setActiveCircle]= useState(false);
	
	function circleClick(number) {
		setSelectedCircle(number);
		setActiveCircle(number);
	}
	
	return (
		<div>
			<Circle color="red" selected={selectedCircle==1} id={1} activate={activeCircle} onClick = {() => selectedCircle==1?circleClick(0):circleClick(1)} />
			<Circle color="yellow" selected={selectedCircle==2} id={2} activate={activeCircle} onClick = {() => selectedCircle==2?circleClick(0):circleClick(2)}/>
			<Circle color="green" selected={selectedCircle==3} id={3} activate={activeCircle} onClick = {() => selectedCircle==3?circleClick(0):circleClick(3)}/>
		</div>
	);
};

export default Home;
