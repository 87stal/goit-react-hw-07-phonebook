import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as phoneBookApi from 'api/phonebookApi';

axios.defaults.baseURL = 'http://localhost:3003';

export const addContact = createAsyncThunk(
  'phoneBook/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const responseContact = await phoneBookApi.addContactsApi(contact);
      return responseContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phoneBook/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      await phoneBookApi.deleteContactsByIdApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchContacts = createAsyncThunk(
  'phoneBook/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phoneBookApi.getContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
