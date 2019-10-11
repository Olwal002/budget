import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense Page</h1>
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 props.dispatch(addExpense(expense));
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return (
    <div>
        <h1>Add Expense Page</h1>
        <ExpenseForm 
            onSubmit={this.onSubmit}
        />
    </div>
);
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            startAddExpense: (expense) => dispatch(startAddExpense(expense))
        }
    }

export default connect(null,mapDispatchToProps)(AddExpensePage); 