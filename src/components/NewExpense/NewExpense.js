import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
// import AddExpense from './AddExpense'
import './NewExpense.css'


const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false)  

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
    //passes args to a function in app JS
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const addExpenseButtonHandler = () => {
    console.log('add button clicked')
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }



  return (
    <div className='new-expense'>

      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
      
    </div>
  )
}

export default NewExpense
