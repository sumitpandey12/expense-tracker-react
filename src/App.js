import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initialData = [
  { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 , location : "Bangalore"},
  { id: "2", date: new Date(2024, 3, 25), title: "Book", price: 10, location : "Delhi" },
  { id: "3", date: new Date(2025, 10, 11), title: "Pen", price: 1 ,location : "Hyderabad"},
  { id: "4", date: new Date(2024, 1, 14), title: "Laptop", price: 200, location : "Mumbai" },
];

function App() {

  const [expenses, setExpense] = useState(initialData);
  

  const newExpenseHandler = (expense) =>{
    setExpense((prev)=>{
      return [...prev, expense];
    });
  }
  return (
    <div>
      <NewExpense onSaveExpenseData = {newExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
