import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent;
  if (props.filteredArray.length > 0) {
    expensesContent = (
      <ul className="expenses-list" >
        {props.filteredArray.map((arrange) => (
        <ExpenseItem
          key={arrange.id}
          title={arrange.title}
          amount={arrange.amount}
          date={arrange.date}
        ></ExpenseItem>
        ))};
      </ul>
    );
  } else {
    expensesContent = (
      <h2 className="expenses-list__fallback">No expenses has been found!</h2>
    );
  }
  return expensesContent;
};

export default ExpensesList;
