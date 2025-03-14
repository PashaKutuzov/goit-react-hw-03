import "./App.css";
import initialContacts from "../contacts.json";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    try {
      return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    } catch (error) {
      console.error("Помилка парсингу JSON з localStorage:", error);
      return initialContacts;
    }
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContacts = (newContacts) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContacts];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <p>{filter}</p>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />

      <ContactList contactsList={filterContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
