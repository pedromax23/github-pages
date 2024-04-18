import { VictoryPie, VictoryLabel } from 'victory';
import { useCuentaContext } from "../CuentaProvider";

function ExpenseChart() {

    const cuenta = useCuentaContext();

    const total = cuenta.reduce((acc, valor) => (acc += valor.monto), 0);
    
    const ingresos = cuenta.filter((registro) => registro.monto > 0)
        .reduce((acc, valor) => acc + valor.monto, 0);

    const egresos = cuenta.filter((registro) => registro.monto < 0)
        .reduce((acc, valor) => acc + valor.monto, 0) * -1;

    const totalExpensesPercentage = Math.round((egresos / ingresos) * 100);
    const totalIncomePercentage = 100 - totalExpensesPercentage;

    return (
        <VictoryPie
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
                { x: "Expenses", y: totalExpensesPercentage },
                { x: "Incomes", y: totalIncomePercentage },
            ]}
            animate={{
                duration: 200
            }}
            labels={({ datum }) => `${datum.y}%`}
            labelComponent={<VictoryLabel
                angle={45}
                style={{
                    fill: "white",
                }}
            />}
        />
    );
}

export default ExpenseChart;
