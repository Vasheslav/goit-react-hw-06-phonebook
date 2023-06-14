import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { Container, Button } from './contactItem.styled';

const ContactList = () => {
  const filterValue = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const normalazedFilter = filterValue.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalazedFilter)
  );

  return (
    <div>
      {filteredContacts.map(contact => (
        <Container key={contact.id}>
          <li>
            {contact.name}: {contact.number}
          </li>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Container>
      ))}
    </div>
  );
};

export default ContactList;
