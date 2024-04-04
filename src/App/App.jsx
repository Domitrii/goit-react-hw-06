import css from './App.module.css'
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';

function App() {

  return (
    <div className={css.container}>
      <p className={css.phoneBook}>Phonebook</p>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
