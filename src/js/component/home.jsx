/*import React from "react";*/
import React, { useState } from "react";
import Circle from "./circle"
import Container from "./container";
import Button from "./Button";

//create your first component
const Home = () => {
	const [selectedCircle, setSelectedCircle]= useState(0);
	const [textBottonOne, setTextBottonOne] = useState("Start to control traffic");
	const [colorBottonOne, setColorBottonOne] = useState("btn-success")
	const [textBottonTwo, setTextBottonTwo] = useState("Show purple light");
	const [showComponent, setShowComponent] =useState(false);

	function circleClick(number) {
		setSelectedCircle(number);	
	}
	
	function nextColor(){

		if (selectedCircle==0) {
			setSelectedCircle(3);
			setTextBottonOne("Change traffic light to yellow");
			setColorBottonOne("btn-warning");
		}
		else if (selectedCircle==3) {
			setSelectedCircle(2);
			setTextBottonOne("Change traffic light to red");
			setColorBottonOne("btn-danger");
		}
		else if (selectedCircle==2) {
			setSelectedCircle(1);
			setTextBottonOne("Change traffic light to green");
			setColorBottonOne("btn-success");
		}
		else {
			setSelectedCircle(3);
			setTextBottonOne("Change traffic light to yellow");
			setColorBottonOne("btn-warning");
		}
	}

	function hideOrShow(){
		setShowComponent(!showComponent);
		textBottonTwo=="Show purple light" ? setTextBottonTwo("Hide purple light") : setTextBottonTwo("Show purple light");
		setSelectedCircle(4);
	}

	return (
		<>
			<Container>
				<Circle color="red" selected={selectedCircle==1} onClick = {() => selectedCircle==1?circleClick(0):circleClick(1)} />
				<Circle color="yellow" selected={selectedCircle==2} onClick = {() => selectedCircle==2?circleClick(0):circleClick(2)}/>
				<Circle color="green" selected={selectedCircle==3} onClick = {() => selectedCircle==3?circleClick(0):circleClick(3)}/>
				{showComponent ? <Circle color="purple" selected={selectedCircle==4} onClick = {() => selectedCircle==4?circleClick(0):circleClick(4)}/>: <></>}
			</Container>
			<div className="d-flex justify-content-center">
				<Button text={textBottonOne} color={colorBottonOne} onClick={() => nextColor()}/>
				<Button text={textBottonTwo} color={"btn-secondary"} onClick={() => hideOrShow()}/>
			</div>
		</>
	);
};

export default Home;
