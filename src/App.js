import ExpenseItem from "./components/ExpenseItem";
function App() { 
  const expenses = [
    {
      id: 'e1',
      title: 'Whole Wheat Bread',
      amount: 1.67,
      date: new Date(2022, 9, 24),
    },
    { 
      id: 'e2', 
      title: 'Winter Boots', 
      amount: 125.98, 
      date: new Date(2022, 9, 10) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 25),
    },
    {
      id: 'e4',
      title: 'Sneakers',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; 

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
