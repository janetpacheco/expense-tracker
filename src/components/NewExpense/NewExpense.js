import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) =>{

    const [isAdding,setIsAdding] = useState(false);
   
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
        setIsAdding(false)
    };

    const addingHandler = () =>{
        setIsAdding(true)
    }

    const cancelAddingHandler = () =>{
        setIsAdding(false)
    }

    return (
        <div className='new-expense'> 
            {!isAdding && <button onClick={addingHandler}>Add New Expense</button>}
            {isAdding && <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancel={cancelAddingHandler}/>}
        </div>
    );    
};

export default NewExpense;