import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList"
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"

const Expenses = (props) => {
	const expenses = props.expenses;

	const [filteredYear, setFilteredYear] = useState('2020')

	const selectYear = (yearSelected) => {
		console.log('The year selected is ' + yearSelected)
		setFilteredYear(yearSelected)
	}

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})


	return (
		<Card className="expenses">
			<ExpenseFilter onSelectYear={selectYear} selected={filteredYear} />
			<ExpensesList filteredExpenses={filteredExpenses} />
			

		
		{/* version 1
			{filteredExpenses.length === 0 ? (
				<p style={{color:'orange'}}>No Expenses found for this date range</p> 
			) : (
				filteredExpenses.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							date={expense.date}
							amount={expense.amount}
						/>
					);
				})
			)}
		
		Version 2
		{filteredExpenses.length === 0 && <p style={{color:'orange'}}>No Expenses found for this date range</p>}
		{filteredExpenses.length > 0 && 
			filteredExpenses.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							date={expense.date}
							amount={expense.amount}
						/>
					);
				})
		}
		*/}
			

			

		
			
			
		</Card>
	);
};

export default Expenses;
