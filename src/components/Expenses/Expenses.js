import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {

    return (
        <Card className="expenses">
            <ExpenseItem 
                title={props.expenses[0].title} 
                amount={props.expenses[0].amount} 
                date={props.expenses[0].date} 
                store={props.expenses[0].store}>                
            </ExpenseItem>
            <ExpenseItem 
                title={props.expenses[1].title} 
                amount={props.expenses[1].amount} 
                date={props.expenses[1].date} 
                store={props.expenses[1].store}>  
            </ExpenseItem>
            <ExpenseItem 
                title={props.expenses[2].title} 
                amount={props.expenses[2].amount} 
                date={props.expenses[2].date}
                store={props.expenses[2].store}> 
            </ExpenseItem>

        </Card>
    );

}
export default Expenses;