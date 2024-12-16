import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import s from './ContactsPage.module.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.app_wrapper}>
      <div>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
