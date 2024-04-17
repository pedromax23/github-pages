import {GlobalProvider} from './context/GlobalState'

import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import ExpenseChart from './components/ExpenseChart';

import './App.css'

function App() {
  return (
    <GlobalProvider>
          <div className='container'>
            <div className='div-tracker'>
              <h1>Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div>
              <ExpenseChart />
              <TransactionList /> 
            </div>
          </div>
    </GlobalProvider>
  )
}

export default App;