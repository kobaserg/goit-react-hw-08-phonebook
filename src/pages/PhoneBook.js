import { useEffect } from 'react';
import { Contacts } from '../components/Contacts/Contacts';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/phonebook/phonebookOperation';

export function PhoneBook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Contacts />
      <Filter />
      <ContactsList />
    </div>
  );
}
