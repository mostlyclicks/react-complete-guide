import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {

  const expenses = props.expenses


  return (
    <div>
      {expenses.map(expense => {
        return (
          <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />
        )
      })}
    </div>
  )
}

export default Expenses
