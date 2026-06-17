import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchSongs = createAsyncThunk(
    'search/fetchSongs',
    async (query) => {
        const response = await axios.get(`/search/album?q=${query}`);
        return response.data.data;
    }
);

const initialState = {
    results: [],
    loading: false,
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        resetResults: (state) => {
            state.results = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload; // Guardamos los álbumes obtenidos
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Guardamos el error si falla
            });
    }
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
