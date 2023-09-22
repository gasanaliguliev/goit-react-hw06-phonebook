import { useDispatch, useSelector } from 'react-redux';
import { setDeletContact } from 'redux/phoneBookReducer';

import css from '../contact/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filterValue = useSelector(state => state.phoneBook.filter);

  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(setDeletContact(contactId));
  };

  const validFilterValue = filterValue.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(validFilterValue)
  );

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={css.contactsItem}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => deleteContact(id)} className={css.delete_button}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

