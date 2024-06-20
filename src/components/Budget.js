import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const value = parseInt(newBudget, 10);
            if (value > 20000) {
                alert("The value cannot exceed the maximum amount of 20000");
                return;
            } 

            const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
            if (value < totalExpenses) {
                alert("You cannot reduce the budget value lower than the spending "+totalExpenses);
                return;
            }
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    }
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onKeyPress={handleSubmit}></input>
</div>
    );
};
export default Budget;
