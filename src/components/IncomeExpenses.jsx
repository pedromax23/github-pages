import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map((transaction) => transaction.amount)

    const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc + item), 0).toFixed(2)

    const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc + item), 0) * -1
    parseInt(expense).toFixed(2)



    return (
        <>
            <div className="income-info">
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            <div className="expense-info">
                <h4>Expense</h4>
                <p>{expense}</p>
            </div>
        </>
    )
}

export default IncomeExpenses