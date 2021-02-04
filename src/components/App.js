import React, { useEffect } from 'react';
import Notification from './Notification/Notification';
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from 'redux/phonebook/phonebook-selector';
import { phonebookOperations } from 'redux/phonebook/';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <div>
          <ContactFilter />
          <ContactList />
        </div>
      ) : (
        <Notification message="No number in the phone book" />
      )}
    </>
  );
}

export default App;
