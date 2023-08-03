import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.addNewExpenseData(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
