import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';

import SearchBar from '../components/SEARCH-BAR';
import searchReducer, { fetchSongs, resetResults } from '../Redux/slices/searchSlice';
import theme from '../theme';


const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
  const actual = jest.requireActual('react-redux');
  return {
    __esModule: true,
    ...actual,
    useDispatch: () => mockDispatch,
  };
});


jest.mock('../Redux/slices/searchSlice', () => {
  const actual = jest.requireActual('../Redux/slices/searchSlice');
  return {
    __esModule: true,
    ...actual,
    fetchSongs: jest.fn((query) => ({ type: 'search/fetchSongs', payload: query })),
    resetResults: jest.fn(() => ({ type: 'search/resetResults' })),
  };
});

describe('SearchBar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithProviders = (ui, { preloadedState = {} } = {}) => {
    const store = configureStore({
      reducer: {
        search: searchReducer,
      },
      preloadedState,
    });

    return render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {ui}
        </ThemeProvider>
      </Provider>
    );
  };

  test('renders the search input correctly', () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  test('allows typing in the input and changes its value', () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'Muse' } });
    expect(input.value).toBe('Muse');
  });

  test('dispatches fetchSongs when typing a valid query', async () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'Nirvana' } });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(fetchSongs('Nirvana'));
    });
  });

  test('dispatches resetResults when input is cleared', async () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');


    mockDispatch.mockClear();


    fireEvent.change(input, { target: { value: 'Coldplay' } });
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(fetchSongs('Coldplay'));
    });


    fireEvent.change(input, { target: { value: '' } });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(resetResults());
    });
  });

  test('renders loading message when loading state is true', () => {
    renderWithProviders(<SearchBar />, {
      preloadedState: {
        search: {
          loading: true,
          results: [],
          error: null,
        },
      },
    });

    expect(screen.getByText('Cargando canciones...')).toBeInTheDocument();
  });
});
