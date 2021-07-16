import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
    //passes args to a function in app JS
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      {/* Passes function as a prop to the form - makes the function available to the form*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
