import ExpenseDate from './ExpenseDate';

import './Expenseltem.css';

function ExpenselItem(props) {
  return (
    <div className='expense-item'>
     <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}
// alt+shift+f document formatter
export default ExpenselItem;
