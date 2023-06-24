/*import React from "react";*/
import React, { useState } from "react";
import Circle from "./circle"
import Container from "./container";
/*import { container } from "webpack";*/

//create your first component
const Home = () => {
	const [selectedCircle, setSelectedCircle]= useState(0);
	const [activeCircle, setActiveCircle]= useState(false);
	
	function circleClick(number) {
		setSelectedCircle(number);
		
	}
	
	return (
		<Container>
			<Circle color="red" selected={selectedCircle==1} onClick = {() => selectedCircle==1?circleClick(0):circleClick(1)} />
			<Circle color="yellow" selected={selectedCircle==2} onClick = {() => selectedCircle==2?circleClick(0):circleClick(2)}/>
			<Circle color="green" selected={selectedCircle==3} onClick = {() => selectedCircle==3?circleClick(0):circleClick(3)}/>
		</Container>
		
	);
};

export default Home;
