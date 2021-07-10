import React from 'react'

const ExpenseItem = (props) => {
  return (
    <div>
    <h2>Expense Item!</h2>
    <p>{props.text}</p>
    </div>
  )
}

export default ExpenseItem
