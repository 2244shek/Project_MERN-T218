import React, { useState } from 'react';
import ExpenseTable from './ExpenseTable';
import ExpenseForm from './ExpenseForm';

function ExpensesPage() {
    const initialExpenses = [
        {
            category: 'Office supplies',
            amount: '500.00',
            date: '2023-01-01',
            description: 'lights',
        },
        {
            category: 'Utilities',
            amount: '100.00',
            date: '2023-01-05',
            description: 'Electricity bill',
        },
        {
            category: 'Food',
            amount: '3000.00',
            date: '2023-01-10',
            description: 'Lunch ',
        },
        {
            category: 'Transportation',
            amount: '75.00',
            date: '2023-01-15',
            description: 'Bus fare',
        },
        {
            category: 'Entertainment',
            amount: '2500.00',
            date: '2023-01-20',
            description: 'Festive party',
        },
    ];
    const [expenses, setExpenses] = useState(initialExpenses);
    const [showAddForm, setShowAddForm] = useState(false);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
        setShowAddForm(false);
    };




    const deleteExpense = (index) => {
        // const deletedExpense = expenses[index];
        setExpenses(expenses.filter((_, i) => i !== index));
    };

    const editExpense = (index, updatedExpense) => {
        setExpenses((prevExpenses) => {
            const updatedExpenses = [...prevExpenses];
            updatedExpenses[index] = { ...updatedExpenses[index], ...updatedExpense };
            return updatedExpenses;
        });
    };
    const totalCost = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0).toFixed(2);

    return (
        <div className="expense-container">
            <h1 id='mainheading'>Expense Manager</h1>
            <div>
                <h3 id='subheading'>Total Cost: <span style={{ "color":"#c41f14" , fontWeight : "700"}}>₹{totalCost}</span></h3>
            </div>
            <button id='aryabutton' onClick={() => setShowAddForm(true)}>Add Expense</button>
            {showAddForm && (
                <div className="modal-overlay">
                    <div className="form-container">
                        <ExpenseForm
                            onAdd={addExpense}
                            onCancel={() => setShowAddForm(false)}
                        />
                    </div>
                </div>
            )}
            <ExpenseTable
                expenses={expenses}
                onDelete={deleteExpense}
                onEdit={editExpense}
            />
        </div>
    );
}

export default ExpensesPage
