import React from 'react';
import ReactDom from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDom.render(<Root store={store} />, root)
})