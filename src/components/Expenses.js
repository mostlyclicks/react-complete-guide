import React from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
	const expenses = props.expenses;

	return (
		<Card className="expenses">
			{expenses.map((expense) => {
				return (
					<ExpenseItem
						title={expense.title}
						date={expense.date}
						amount={expense.amount}
					/>
				);
			})}
		</Card>
	);
};

export default Expenses;
