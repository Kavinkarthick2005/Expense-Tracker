import React, { useState } from "react";
import Transaction from "./components/Transaction";

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (text, amount) => {
        setTransactions([...transactions, { text, amount }]);
    };

    return (
        <div>
            <h1>Expense Tracker</h1>
            <Transaction transactions={transactions} onAdd={addTransaction} />
        </div>
    );
};

export default App;
