import React, { useState } from 'react';
import axios from 'axios';

export default function AddItems() {
  // name & description are string, price is a float
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Onclick function to get name value in forms
  const getName = (event) => {
    event.preventDefault();
    // Retrieve input field value from JS event object.
    const inputName = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputName);
    // Set the value stored in component state to be the new value.
    setName(inputName);
  };

  // Onclick function to get description value in forms
  const getDescription = (event) => {
    event.preventDefault();
    // Retrieve input field value from JS event object.
    const inputDescription = event.target.value;
    // Log input field value to verify what we typed.
    console.log(inputDescription);
    // Set the value stored in component state to be the new value.
    setDescription(inputDescription);
  };

  // Onclick function to get price value in forms
  const getPrice = (event) => {
    event.preventDefault();
    // Retrieve input field value from JS event object.
    const inputPrice = event.target.value;
    // Log price field value to verify what we typed.
    console.log(inputPrice);
    // Set the value stored in component state to be the new value.
    setPrice(inputPrice);
  };

  const createItem = () => {
    console.log('Click');
    // const { total } = calculateTotals(items);
    const newItem = { name, description, price };
    axios.post('/newItems', newItem).then((result) => {
      console.log(result);
      console.log(result.data.name);
    });
  };

  // The value of the input field always matches the value in the state
  // variable name. When the input value changes, handleChange updates
  // the value in the state.
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} onChange={getName} />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" value={description} onChange={getDescription} />
      <label htmlFor="price">Price</label>
      <input type="number" name="price" value={price} onChange={getPrice} />
      <button type="submit" onClick={createItem}>Create Item</button>
    </div>
  );
}
