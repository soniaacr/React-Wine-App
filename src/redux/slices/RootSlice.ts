import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: 'Brand',
        type: 'Type',
        origin: 'Origin',
        year: 'Year',
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseType: (state, action) => { state.type = action.payload},
        chooseOrigin: (state, action) => { state.origin = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseType, chooseOrigin, chooseYear } = rootSlice.actions