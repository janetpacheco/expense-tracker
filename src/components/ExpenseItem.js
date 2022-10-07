import './ExpenseItem.css';
function ExpenseItem() {
const expenseDate = new Date(2022,09,24);
const expenseTitle = 'Groceries';
const expensePlace = 'Walmart';
const expenseAmount = '$19.68';
    return (
        <div className='expense-item'>
            <div>September 24th 2022</div>
            <div className='expense-item__description'>
                <h2>Groceries</h2>
                <div className='expense-item'>Walmart</div>
                <div className='expense-item__price'>$19.68</div>
            </div>
        </div>
    );
}

export default ExpenseItem;