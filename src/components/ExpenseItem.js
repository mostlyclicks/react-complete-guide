import React from "react";

const ExpenseItem = (props) => {
	return (
		<div>
			<div>March 28th, 2021</div>
			<h2>Car Insurance</h2>
			<div>$400.00</div>
			<p>{props.text}</p>
		</div>
	);
};

export default ExpenseItem;
