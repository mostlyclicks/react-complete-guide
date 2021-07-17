import React from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"

const Expenses = (props) => {
	const expenses = props.expenses;

	return (
		<Card className="expenses">
			<ExpenseFilter />
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
