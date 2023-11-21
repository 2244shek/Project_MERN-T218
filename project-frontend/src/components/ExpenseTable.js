import React, { useState } from 'react';
import './ExpenseTable.css'
const ExpenseTable = ({ expenses, onDelete, onEdit }) => {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editCategory, setEditCategory] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
    const { category, amount, date, description } = expenses[index];
    setEditCategory(category);
    setEditAmount(amount);
    setEditDate(date);
    setEditDescription(description);
  };

  const handleSave = (index) => {
    onEdit(index, {
      category: editCategory,
      amount: editAmount,
      date: editDate,
      description: editDescription,
    });
    setEditingIndex(-1);
  };

  const handleCancel = () => {
    setEditingIndex(-1);
  };

  return (
    <div id='ExpenseCont'>
      <h2 id='Expensetableheading' >Expense Table</h2>
      <table>
        <thead>
          <tr>
            <th>Item Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                  />
                ) : (
                  expense.category
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                  />
                ) : (
                  expense.amount
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                  />
                ) : (
                  expense.date
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                ) : (
                  expense.description
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <>
                    <button id='aryabutton' onClick={() => handleSave(index)}>Save</button>
                    <button id='aryabutton' onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button id='aryabutton' onClick={() => handleEdit(index)}>Edit</button>
                )}
                <button id='aryabutton' onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
