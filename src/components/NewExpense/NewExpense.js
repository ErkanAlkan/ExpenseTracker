import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [addNewExpensePanel, setAddNewExpensePanel] = useState("");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addNewExpenseData(expenseData);
    setAddNewExpensePanel("");
  };

  const cancelPanelHandler = () => {
    setAddNewExpensePanel("");
  };
  const addNewExpensePanelHandler = () => {
    setAddNewExpensePanel(
      <div>
        <ExpenseForm
          saveExpenseData={saveExpenseDataHandler}
          cancelButton={cancelPanelHandler}
          submitButton={addNewExpensePanelHandler}
        ></ExpenseForm>
      </div>
    );
  };

  let initialButton = (
    <div>
      {addNewExpensePanel === "" ? (
        <button onClick={addNewExpensePanelHandler}>Add New Expense</button>
      ) : (
        ""
      )}
    </div>
  );
  return (
    <div className="new-expense">
      {initialButton}
      {addNewExpensePanel}
    </div>
  );
};

export default NewExpense;
