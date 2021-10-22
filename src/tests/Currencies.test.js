import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('Homepage renders', () => {
  test('It should show the correct text on Section title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('CryptoCurrencies')).toBeInTheDocument();
  });
  test('It should show the correct text on Page Title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('STATS BY CURRENCY')).toBeInTheDocument();
  });
});
