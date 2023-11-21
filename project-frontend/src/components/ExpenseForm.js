import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = ({ onAdd, onCancel }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields (you can add more validation if needed)
    if (!category || !amount || !date || !description) {
      alert('Please fill out all fields');
      return;
    }

    // Create an expense object
    const expense = {
      category,
      amount,
      date,
      description,
    };

    // Pass the expense to the parent component (App.js)
    onAdd(expense);

    // Reset the form fields
    setCategory('');
    setAmount('');
    setDate('');
    setDescription('');
  };

  return (
    <div id='ExpensFormCont'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Item Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          placeholder='Item category'
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          placeholder='Amount in ₹ INR'
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          placeholder='About the Item purchased'
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add</button>
        <br/>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
