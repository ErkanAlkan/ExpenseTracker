import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let filteredArray = props.expenses.filter(
    (data) => data.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        changeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredArray} />
      <ExpensesList filteredArray={filteredArray} />
    </Card>
  );
}

export default Expense;
