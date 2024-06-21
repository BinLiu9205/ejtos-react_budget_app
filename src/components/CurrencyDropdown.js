import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../context/AppContext';
import '../sources/budget.css';


const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setCurrency] = useState(currency);
    const changeCurrency = (event) => {
        const newCurrency = event.target.value; 
        setCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        }); 
    };
    return (
        <div className="currency-dropdown-container">
            <select 
                value={selectedCurrency} 
                onChange={changeCurrency} 
                className="currency-dropdown"
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;