import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
        items: []
   }
   
const contactSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
    reducers: {
        addContact(state, action){
          state.items.push(action.payload)  
        },
        deleteContact(state, action){
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    }
})
   
export const {addContact, deleteContact} = contactSlice.actions

export const contactsReducer = contactSlice.reducer
export const selectContacts = state => state.contacts.items