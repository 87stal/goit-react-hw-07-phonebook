import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3003';

export const getContactsApi = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

export const addContactsApi = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContactsByIdApi = id => {
  return axios.delete(`/contacts/${id}`);
};
