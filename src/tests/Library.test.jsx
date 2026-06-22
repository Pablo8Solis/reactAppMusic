import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';

import Library from '../components/LIBRARY-SONGS';
import libraryReducer, { removeSong } from '../Redux/slices/librarySlice';
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
    removeSong: jest.fn((id) => ({ type: 'library/removeSong', payload: id })),
  };
});

describe('Library Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithProviders = (ui, { preloadedState = {} } = {}) => {
    const store = configureStore({
      reducer: {
        library: libraryReducer,
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

  const mockLibrarySongs = [
    {
      id: 101,
      title: 'Karma Police',
      artist: 'Radiohead',
      imgSrc: 'karma.jpg',
    },
    {
      id: 102,
      title: 'Creep',
      artist: 'Radiohead',
      imgSrc: 'creep.jpg',
    }
  ];

  test('renders list of songs in library correctly', () => {
    renderWithProviders(<Library />, {
      preloadedState: {
        library: mockLibrarySongs,
      },
    });

    expect(screen.getByText('Tu biblioteca')).toBeInTheDocument();
    expect(screen.getByText('Karma Police')).toBeInTheDocument();
    expect(screen.getByText('Creep')).toBeInTheDocument();
    expect(screen.getAllByText('Radiohead')).toHaveLength(2);
  });

  test('clicking remove button dispatches removeSong action', () => {
    renderWithProviders(<Library />, {
      preloadedState: {
        library: mockLibrarySongs,
      },
    });

    const removeButtons = screen.getAllByText('x');
    expect(removeButtons).toHaveLength(2);

    fireEvent.click(removeButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith(removeSong(101));
  });

  test('renders empty library message when there are no songs', () => {
    renderWithProviders(<Library />, {
      preloadedState: {
        library: [],
      },
    });

    expect(screen.getByText('No hay canciones guardadas.')).toBeInTheDocument();
  });
});
