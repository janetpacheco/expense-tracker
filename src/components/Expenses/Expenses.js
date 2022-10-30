import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    
    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
          
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
            <ExpensesList expenses = {filteredExpenses}/>           
        </Card>
    </div>
  );
};   
export default Expenses;