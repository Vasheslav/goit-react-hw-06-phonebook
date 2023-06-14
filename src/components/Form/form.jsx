import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Forma, Label, Button, Input } from './form.styled';

function Form() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (isContactExist) {
      alert(`${name} is already in contacts.`);
      e.target.reset();
      return;
    }

    dispatch(addContact(name.value, number.value));

    e.target.reset();
  };

  return (
    <Forma onSubmit={formSubmitHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Forma>
  );
}

export default Form;
