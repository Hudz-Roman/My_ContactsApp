import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FallingLines } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import {
  selectIsLoading,
  selectIsError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    if (isError) {
      toast.error("This didn't work.");
    }
  }, [isError]);

  return (
    <div>
      <div className={s.loader_wrapper}>
        {isLoading && (
          <FallingLines
            color='#000'
            width='75'
            visible={true}
            ariaLabel='falling-circles-loading'
          />
        )}
      </div>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
