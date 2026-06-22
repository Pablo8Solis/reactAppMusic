import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import SearchResults from '../components/SEARCH-RESULTS';
import searchReducer from '../Redux/slices/searchSlice';
import { addSong } from '../Redux/slices/librarySlice';
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

jest.mock('../Redux/slices/librarySlice', () => {
  const actual = jest.requireActual('../Redux/slices/librarySlice');
  return {
    __esModule: true,
    ...actual,
    addSong: jest.fn((song) => ({ type: 'library/addSong', payload: song })),
  };
});

describe('SearchResults Component', () => {
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
          <MemoryRouter>
            {ui}
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
  };

  const mockAlbums = [
    {
      id: 1,
      title: 'OK Computer',
      artist: { name: 'Radiohead' },
      cover_medium: 'cover.jpg',
    },
    {
      id: 2,
      title: 'Kid A',
      artist: { name: 'Radiohead' },
      cover_medium: 'cover2.jpg',
    }
  ];

  test('renders list of search results correctly', () => {
    renderWithProviders(<SearchResults />, {
      preloadedState: {
        search: {
          results: mockAlbums,
          loading: false,
          error: null,
        },
      },
    });

    expect(screen.getByText('Resultados de búsqueda')).toBeInTheDocument();
    expect(screen.getByText('OK Computer')).toBeInTheDocument();
    expect(screen.getByText('Kid A')).toBeInTheDocument();
    expect(screen.getAllByText('Radiohead')).toHaveLength(2);
  });

  test('clicking add button dispatches addSong action and updates button text', () => {
    renderWithProviders(<SearchResults />, {
      preloadedState: {
        search: {
          results: mockAlbums,
          loading: false,
          error: null,
        },
      },
    });

    const addButtons = screen.getAllByText('+');
    expect(addButtons).toHaveLength(2);

    fireEvent.click(addButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith(addSong({
      id: 1,
      title: 'OK Computer',
      artist: 'Radiohead',
      imgSrc: 'cover.jpg',
    }));

    expect(screen.getByText('✓')).toBeInTheDocument();
  });

  test('renders loader when loading state is true', () => {
    renderWithProviders(<SearchResults />, {
      preloadedState: {
        search: {
          results: [],
          loading: true,
          error: null,
        },
      },
    });

    expect(screen.getByAltText('Loading')).toBeInTheDocument();
  });

  test('renders error message when error state is present', () => {
    renderWithProviders(<SearchResults />, {
      preloadedState: {
        search: {
          results: [],
          loading: false,
          error: 'Connection Timeout',
        },
      },
    });

    expect(screen.getByText('Error al cargar los resultados: Connection Timeout')).toBeInTheDocument();
  });

  test('renders no search text when results are empty', () => {
    renderWithProviders(<SearchResults />, {
      preloadedState: {
        search: {
          results: [],
          loading: false,
          error: null,
        },
      },
    });

    expect(screen.getByText('No hay busqueda reciente')).toBeInTheDocument();
  });
});
