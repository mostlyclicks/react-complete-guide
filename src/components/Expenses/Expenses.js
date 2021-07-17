import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"

const Expenses = (props) => {
	const expenses = props.expenses;

	const [filteredYear, setFilteredYear] = useState('2020')

	const selectYear = (yearSelected) => {
		console.log('The year selected is ' + yearSelected)
		setFilteredYear(yearSelected)
	
	}

	return (
		<Card className="expenses">
			<ExpenseFilter onSelectYear={selectYear} selected={filteredYear} />
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
