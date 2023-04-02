import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './Expenseltem.css';

function ExpenselItem(props) {
  return (
    <Card className='expense-item'>
     <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}
// alt+shift+f document formatter
export default ExpenselItem;
