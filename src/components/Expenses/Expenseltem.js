import React, { useState } from "react";

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseltem.css';

function ExpenselItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React')
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
     <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
// alt+shift+f document formatter
export default ExpenselItem;
