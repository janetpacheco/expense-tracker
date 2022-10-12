import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props)=>{


    return(
        <ul className='expenses-list'>
           {
                props.expenses.map((expense) => {
                    <ExpenseItem
                            id = {expense.id}
                            title = {expense.title}
                            store = {expense.store}
                            amount = {expense.amount}
                            date = {expense.date}
                        />
                    }
                )
            }           
        </ul>

    );

};
export default ExpensesList;


