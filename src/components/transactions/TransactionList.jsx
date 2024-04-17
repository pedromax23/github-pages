import {useGlobalState} from '../../context/GlobalState'
import {TransactionItem} from './TransactionItem'

function TransactionList() {

    const {transactions} = useGlobalState()

    return (
        <>
            <h3 className='list-title'>History</h3>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </>
    )
} 

export default TransactionList