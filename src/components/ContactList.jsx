import Contact from "./Contact";
import css from "./ContactsStyle/ContactList.module.css";

export default function ContactList({ contactsList, onDelete }) {
  return (
    <ul className={css.listItem}>
      {contactsList.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
