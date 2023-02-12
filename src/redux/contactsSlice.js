import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [  {id: 'id-2', name: 'Lionell Ronaldo', number: '093-93-22-454'},
  {id: 'id-3', name: 'Cristiano Messi', number: '067-23-76-229'},
  {id: 'id-4', name: 'Menaldo Crinell', number: '099-54-93-234'},],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      return [...state.filter(contact => contact.id !== action.payload)];
    },
  },
});
export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;