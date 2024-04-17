import {useGlobalState} from '../../context/GlobalState'

export function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalState()

    return (
        <li className='list-items'>
            <p className='text-sm'>{transaction.description}</p>
            <div>
                <span className='amount-item'>${transaction.amount}</span>
                <button className='item-button' onClick={() => {
                    deleteTransaction(transaction.id)
                }}>
                    x
                </button>
            </div>
        </li> 
    )
}

export default TransactionItem;