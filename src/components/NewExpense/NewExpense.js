import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
// import AddExpense from './AddExpense'
import './NewExpense.css'


const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
    //passes args to a function in app JS
    props.onAddExpense(expenseData)
    setShowForm(false)
  }

  const addExpenseButtonHandler = () => {
    console.log('add button clicked')
    setShowForm(true)
  }

  return (
    <div className='new-expense'>

      {showForm === false && <button onClick={addExpenseButtonHandler}>Add New Expense</button>}
        {/* Passes function as a prop to the form - makes the function available to the form */}
      {showForm === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
      

      

      
    </div>
  )
}

export default NewExpense
