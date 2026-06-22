import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

import App from '../App';
import libraryReducer from '../Redux/slices/librarySlice';
import searchReducer from '../Redux/slices/searchSlice';

jest.mock('axios');

describe('App Component Integration', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    axios.get.mockResolvedValue({ data: { data: [] } });

    store = configureStore({
      reducer: {
        library: libraryReducer,
        search: searchReducer,
      },
    });
  });

  const renderApp = () => {
    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  };

  test('renders Header, SearchBar and SearchResults initially', () => {
    renderApp();

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByText('Apple Music')).toBeInTheDocument();
    expect(screen.getAllByText('Biblioteca').length).toBeGreaterThan(0);
    expect(screen.getByText('Resultados de búsqueda')).toBeInTheDocument();
    expect(screen.queryByText('Tu biblioteca')).not.toBeInTheDocument();
  });

  test('completes search flow, adding to library and viewing library', async () => {
    const mockResults = [
      {
        id: 501,
        title: 'High and Dry',
        artist: { name: 'Radiohead' },
        cover_medium: 'high_and_dry.jpg',
      },
    ];
    axios.get.mockResolvedValue({ data: { data: mockResults } });

    renderApp();

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Radiohead' } });

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('/search/album?q=Radiohead');
    });

    await waitFor(() => {
      expect(screen.getByText('High and Dry')).toBeInTheDocument();
    });

    const addButton = screen.getByText('+');
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    const libraryLink = screen.getAllByText('Biblioteca').find(el => el.tagName === 'SPAN');
    fireEvent.click(libraryLink);

    expect(screen.getByText('Tu biblioteca')).toBeInTheDocument();
    expect(screen.getByText('High and Dry')).toBeInTheDocument();
    expect(screen.queryByText('Resultados de búsqueda')).not.toBeInTheDocument();
  });
});
