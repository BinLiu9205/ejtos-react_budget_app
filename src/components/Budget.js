import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../sources/budget.css'

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ced4da',
};

const labelStyle = {
    margin: '0',
    padding: '0',
    fontSize: '1rem',
};

const inputStyle = {
    width: '100px',
    textAlign: 'right',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
};

const Budget = () => {
    const { budget, dispatch, expenses, currency} = useContext(AppContext);
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
        <div className='alert alert-secondary' style={{ containerStyle }}>
            <span style={{ labelStyle }}>Budget: {currency}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onKeyPress={handleSubmit} style={{inputStyle}}></input>
</div>
    );
};
export default Budget;

