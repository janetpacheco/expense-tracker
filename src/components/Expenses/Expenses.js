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
        console.log(filteredYear);
          
    };

    const filteredExpenses = props.expenses.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
    <div>
        <Card className="expenses">
            <ExpensesFilter
                selected = {filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {props.expenses.map((expense =>
                <ExpenseItem 
                    title = {expense.title}
                    store = {expense.store}
                    amount = {expense.amount}
                    date = {expense.date}
                />
            ))}
            {/* <ExpensesList expenses = {filteredExpenses}/>            */}
        </Card>
    </div>
  );
};   
export default Expenses;