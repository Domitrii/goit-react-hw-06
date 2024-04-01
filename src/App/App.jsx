import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';

import css from './App.module.css'
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';

const firstNumbers = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


function App() {
  const [numbers, setNumber] = useState(() => {
    const savedNumber = localStorage.getItem('numbers');
    return savedNumber ? JSON.parse(savedNumber) : firstNumbers;
  })  
  const [filter, setFilter] = useState("")
  useEffect(() => {
    localStorage.setItem('numbers', JSON.stringify(numbers))
  },[numbers])

  const addNewNumber = (numbData) => {
    const finalNumb = { ...numbData, id: nanoid()}
    setNumber((prevNumbers) => [...prevNumbers, finalNumb])
  }

  const onDelete = (numbId) => {
      setNumber(prevNumbers => prevNumbers.filter(numb => numb.id !== numbId))
  }

  const filteredNumbers = numbers.filter((numb) =>
    numb.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <p className={css.phoneBook}>Phonebook</p>
      <ContactForm addNewNumber={addNewNumber} />
      <SearchBox value={filter} setFilter={setFilter} />
      <ContactList name={filteredNumbers} onDelete={onDelete} />
    </div>
  )
}

export default App
