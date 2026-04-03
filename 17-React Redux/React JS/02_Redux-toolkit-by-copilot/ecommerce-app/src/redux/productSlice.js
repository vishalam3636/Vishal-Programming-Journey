import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Laptop', price: 999.99, image: '💻' },
    { id: 2, name: 'Phone', price: 699.99, image: '📱' },
    { id: 3, name: 'Headphones', price: 199.99, image: '🎧' },
    { id: 4, name: 'Smartwatch', price: 299.99, image: '⌚' },
    { id: 5, name: 'Tablet', price: 499.99, image: '📱' },
    { id: 6, name: 'Camera', price: 1299.99, image: '📷' },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Add more reducers as needed
  },
});

export default productSlice.reducer;
 