import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    
    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
          
    };

    const filteredExpenses = props.expenses.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent =  <p>There are no expense records</p>;
    if(filteredExpenses.length >0){
       expensesContent =   filteredExpenses.length >0 &&
       filteredExpenses.map((expense =>
         <ExpenseItem 
             key ={expense.id}
             title = {expense.title}
             store = {expense.store}
             amount = {expense.amount}
             date = {expense.date}
         />
 ))
    }
    
    return (
    <div>
        <Card className="expenses">
            <ExpensesFilter
                selected = {filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expensesContent}              
            {/* <ExpensesList expenses = {filteredExpenses}/>            */}
        </Card>
    </div>
  );
};   
export default Expenses;