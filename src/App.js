import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() { 

  const expenses = [
    {
      id: 'e1',
      title: 'Whole Wheat Bread',
      amount: 1.67,
      date: new Date(2022, 8, 24),
      store: 'Walmart',
    },
    { 
      id: 'e2', 
      title: 'Winter Boots', 
      amount: 125.98, 
      date: new Date(2022, 8, 10),
      store: 'Walmart', 
    },
      
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 25),
      store: 'Walmart',
    },
    {
      id: 'e4',
      title: 'Sneakers',
      amount: 450,
      date: new Date(2021, 5, 12),
      store: 'Walmart',
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
