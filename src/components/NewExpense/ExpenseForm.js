import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{
    // First approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredStore, setEnteredStore] =  useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');    

    // const[userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredStore:'',
    //     enteredSAmount:'',     
    //     enteredSDate:'',
    // });
    

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // Asure the lastest state snapshot 
        // setUserInput((prevState) => {
        //    return {...prevState,enteredTitle:event.target.value}; 
        // });

    };

    const storeChangeHandler = (event) =>{
        setEnteredStore(event.target.value);
       
        // setUserInput((prevState) => {
        //     return {...prevState,enteredStore:event.target.value}; 
        //  });
        
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState,enteredAmount:event.target.value}; 
        //  });
        
    };

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState,enteredDate:event.target.value}; 
        //  });
        
    };

    const submitHandler =(event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            store: enteredStore,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredStore('walmart');

    } ;

    return (
        <form onSubmit={submitHandler}>
           <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                type='text' 
                value={enteredTitle} 
                onChange={titleChangeHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Store</label>
                <input 
                type='text' 
                value={enteredStore} 
                onChange={storeChangeHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
            
            </div> 
            <div className='new-expense__actions'>
                <button type='submit'>
                    Add Expense
                </button>
            </div>

        </form>
    );
};
export default ExpenseForm;