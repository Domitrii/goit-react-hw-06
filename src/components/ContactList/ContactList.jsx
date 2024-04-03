import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"

const getVisibleContacts = (contacts, filters) => {
  return contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filters.toLowerCase())
  );
};

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const contactsVisible = getVisibleContacts(contacts, filters);

  return (
    <ul className={css.listUl}>
      {contactsVisible.map((contact) => {
        return (
          <Contact
            key={contact.id}
            number={contact.number}
            numberId={contact.id}
            numberName={contact.name}
          />
        );
      })}
    </ul>
  );
}

export default ContactList