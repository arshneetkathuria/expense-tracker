import React,{useState} from "react";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2020")

    const filterHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
  
    const filteredExpenses = props.expenses.filter((expense) =>{
    return (expense.date.getFullYear().toString() === filteredYear);
    });
    
    return (
      <div>
        <NewExpense onAddExpense={appExpenseHandler }/>
        <Card className="expenses">
          <Filter selected={filteredYear} onChangeFilter={filterHandler} />
          <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>
    );
 }
export default Expenses