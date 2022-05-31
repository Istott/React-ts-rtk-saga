import { createSlice } from '@reduxjs/toolkit';

interface ICat {
    name: string | null;
}

interface CatState {
    cats: ICat[];
    isLoading: boolean;
}

const initialState: CatState = {
    cats: [],
    isLoading: false
}

export const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action: any) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getCatsFailure: (state) => {
            state.isLoading = false
        }

    }
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catSlice.actions;

export default catSlice.reducer;