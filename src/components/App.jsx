import { ContactList } from './contact/ContactList';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import css from '../components/App.module.css';

export function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
