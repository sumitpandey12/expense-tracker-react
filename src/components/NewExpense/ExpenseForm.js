import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [collepse, setCollepse] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expense = {
      price: +enteredAmount,
      date: new Date(enteredDate),
      title: enteredTitle,
      location: "Demo",
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setCollepse(!collepse);

    props.onSaveExpenseData(expense);
  };

  function collapseFunction() {
    setCollepse(!collepse);
  }

  return (
    <form onSubmit={handleSubmit}>
      {collepse && <button onClick={collapseFunction}>Add Expense</button>}
      {!collepse && (
        <div className="container">
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                min="2023-01-01"
                max="2024-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={collapseFunction}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
