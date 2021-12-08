import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const [userInput, setInput] = useState({
        title: "",
        amount: "",
        date:""
    });
    const titleChangeHandler = (event) => {
        setInput((prevState)=>{
            return ({...prevState,title:event.target.value});
        });
    };
    const amountChangeHandler = (event) => {
        setInput((prevState)=>{
            return ({...prevState,amount:event.target.value});
        });

    }
    const dateChangeHandler = (event) => {
        setInput((prevState)=>{
            return ({...prevState,date:event.target.value});
        });
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: +userInput.amount,
            date:new Date(userInput.date)
        };
        props.onSaveData(expenseData);
        setInput(() => {
            return ({
                title:'',
                amount:'',
                date:''
            });
         });
    };

    return (<form onSubmit={submitHandler }>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" value={userInput.title} onChange={ titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number" value={userInput.amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" value={userInput.date} min="2019-01-01" max="2022-02-02" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
    </div>
    </form>);
}
export default ExpenseForm;