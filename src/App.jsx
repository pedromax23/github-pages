import Ingreso from './components/Ingreso'
import Egreso from './components/Egreso'
import Balance from './components/Balance'
import Form from './components/Form'
import ExpenseChart from './components/ExpenseChart'
import ItemsView from './components/ItemsView'

import { CuentaProvider } from './CuentaProvider'

import React, { useState } from 'react'

import './App.css'


function App() {


  return (
    <CuentaProvider>
      <div className='container'>
        <div className='div-tracker'>
          <Ingreso />
          <Egreso />
          <Balance />
        </div>
        <div>
          <Form />
          <ExpenseChart />
        </div>
        <ItemsView />
      </div>
    </CuentaProvider>
  )
}

export default App;