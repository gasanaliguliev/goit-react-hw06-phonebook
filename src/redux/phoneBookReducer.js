import { createSlice } from '@reduxjs/toolkit';

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    setAddContact: (state, action) => {
      const { name, number, id } = action.payload;
      state.contacts.push({ name, number, id });
    },

    setDeletContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setAddContact, setDeletContact, setFilter } =
phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
