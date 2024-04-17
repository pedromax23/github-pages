import {useGlobalState} from '../context/GlobalState.jsx'

function Balance() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className='div-balance'>
            <h3>Your Balance</h3>
            <h1>${total}</h1>
        </div>
    )
} 

export default Balance;