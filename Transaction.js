import React, { useState } from "react";

const Transaction = ({ transactions, onAdd }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(text, parseFloat(amount));
        setText("");
        setAmount("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Transaction" />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
                <button type="submit">Add</button>
            </form>
            <ul>
                {transactions.map((t, index) => (
                    <li key={index}>{t.text}: ${t.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default Transaction;
