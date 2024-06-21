import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const buttonStyle1 = {
    background: 'green',
    width: '2em',
    height: '2em',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  };

  const buttonStyle2 = {
    background: 'red',
    width: '2em',
    height: '2em',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  };

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={buttonStyle1} onClick={event=> increaseAllocation(props.name)}>
            <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: 'white'}} />
            </button></td>
        <td><button style={buttonStyle2} onClick={event=> decreaseAllocation(props.name)}>
            <FontAwesomeIcon icon={faMinus} size="lg" style={{ color: 'white'}} />
            </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
