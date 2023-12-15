import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + query)
      .then((resp) => resp.json())
      .then((transactions) => {
        console.log("All transactions:", transactions);
        const filteredTransactions = transactions.filter((transaction) =>
          transaction.description.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Filtered transactions:", filteredTransactions);
        setTransactions(filteredTransactions);
      });
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;


