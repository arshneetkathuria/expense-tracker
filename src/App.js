import React, { useState } from "react";
import "./Components/Expense/ExpensesList";
import "./Components/Expense/Expenses.css";
import Card from "./Components/UI/Card";
import Filter from "./Components/UI/Filter";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpensesList from "./Components/Expense/ExpensesList";
import ExpensesChart from "./Components/Expense/ExpensesChart";
const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Toilet Paper",
    amount: 234.5,
    date: new Date(2021, 5, 23)
  },
  {
    id: "2",
    title: "Book",
    amount: 321.5,
    date: new Date(2019, 4, 13)
  },
  {
    id: "3",
    title: "Eggs",
    amount: 780.5,
    date: new Date(2020, 5, 29)
  },
  {
    id: "4",
    title: "Purses",
    amount: 322.5,
    date: new Date(2020, 2, 2)
  }
];
function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const appExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });

  };
   
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) =>{
  return (expense.date.getFullYear().toString() === filteredYear);
  });
  
  return (
    <div>
      <NewExpense onAddExpense={appExpenseHandler }/>
      <Card className="expenses">
        <Filter selected={filteredYear} onChangeFilter={filterHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
  
}

export default App;
