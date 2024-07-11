import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    function saveExpenseDataHandler(enteredExpenseData){
        enteredExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onSaveExpenseData(enteredExpenseData);
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
