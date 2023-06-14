import React from 'react';
import Form from './Form/form';
import Filter from './Filter/filter';
import ContactList from './ContactList/contactList';
import { Section } from './App.styled';

export function App() {
  return (
    <Section>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
}
