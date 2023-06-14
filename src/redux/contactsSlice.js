import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, actions) => {
        return [actions.payload, ...state];
      },
      prepare: (name, number) => ({
        payload: {
          id: nanoid(),
          name: name,
          number: number,
        },
      }),
    },

    deleteContact: {
      reducer: (state, actions) => {
        return state.filter(({ id }) => {
          return id !== actions.payload.id;
        });
      },
      prepare: id => ({
        payload: { id },
      }),
    },
  },
});

const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsReducer;
