import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import { ListContacts, ButtonDel } from './ContactsStyled';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactFiltering = () => { 
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
  };

  const filteredContacts = contactFiltering();


  return (
    <ListContacts>
      {filteredContacts.map(({ id, name, number }) => 
        <li key={id}>
          {name}: {number}
          <ButtonDel type='button' onClick={() => {
                dispatch(removeContact(id));
              }}>Delete</ButtonDel> 
        </li>)
      }   
     
    </ListContacts>
  )   
}


export default Contacts;
