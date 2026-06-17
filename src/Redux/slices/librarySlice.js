import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addSong: (state, action) => {
            const songExists = state.find(song => song.id === action.payload.id);
            if (!songExists) {
                state.push(action.payload);
            }
        },
        removeSong: (state, action) => {
            return state.filter(song => song.id !== action.payload);
        }
    }
});

export const { addSong, removeSong } = librarySlice.actions;

export default librarySlice.reducer;
