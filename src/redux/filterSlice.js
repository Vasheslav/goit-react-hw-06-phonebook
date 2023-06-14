import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filters: {
      reducer: (state, actions) => {
        return actions.payload.value;
      },
      prepare: value => ({
        payload: { value },
      }),
    },
  },
});

const filterReducer = filterSlice.reducer;
export const { filters } = filterSlice.actions;

export default filterReducer;
