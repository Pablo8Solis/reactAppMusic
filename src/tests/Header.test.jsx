import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';

import Header from '../components/HEADER';
import libraryReducer from '../Redux/slices/librarySlice';
import searchReducer from '../Redux/slices/searchSlice';
import theme from '../theme';

const renderWithProviders = (ui, { preloadedState = {} } = {}) => {
  const store = configureStore({
    reducer: {
      library: libraryReducer,
      search: searchReducer,
    },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          {ui}
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe('Header Component', () => {
  test('renders navigation links correctly', () => {
    renderWithProviders(<Header view="home" />);


    expect(screen.getByText('Apple Music')).toBeInTheDocument();
    expect(screen.getByText('Biblioteca')).toBeInTheDocument();
  });

  test('calls onGoHome when Apple Music is clicked', () => {
    const onGoHomeMock = jest.fn();
    renderWithProviders(<Header view="home" onGoHome={onGoHomeMock} />);

    fireEvent.click(screen.getByText('Apple Music'));
    expect(onGoHomeMock).toHaveBeenCalledTimes(1);
  });

  test('calls onGoLibrary when Biblioteca is clicked', () => {
    const onGoLibraryMock = jest.fn();
    renderWithProviders(<Header view="home" onGoLibrary={onGoLibraryMock} />);

    fireEvent.click(screen.getByText('Biblioteca'));
    expect(onGoLibraryMock).toHaveBeenCalledTimes(1);
  });

  test('shows categories when view is home (not library)', () => {
    renderWithProviders(<Header view="home" />);


    expect(screen.getByText('Explorar Categorías')).toBeInTheDocument();
  });

  test('does not show categories when view is library', () => {
    renderWithProviders(<Header view="library" />);


    expect(screen.queryByText('Explorar Categorías')).not.toBeInTheDocument();
  });
});
