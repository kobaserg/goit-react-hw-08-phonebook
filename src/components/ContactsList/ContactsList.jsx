import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchContacts } from '../../redux/phonebook/phonebookOperation';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStoreContacts,
  getStoreFilter,
  getLoading,
} from '../../redux/phonebook/phonebookSlice';
import { Loader } from 'components/Loader/Loader';
import {
  ListContact,
  ItemContact,
  Contact,
  NameCont,
  BtnDelete,
} from './ContactsList.styled';
import { deleteContact } from '../../redux/phonebook/phonebookOperation';

export const ContactsList = () => {
  const contactsGallery = useSelector(getStoreContacts);
  const filter = useSelector(getStoreFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteContact(id));
  }

  let renderList = [];
  const normolizedFilter = filter.toLowerCase().trim();
  const filterContacts = contactsGallery.filter(cont =>
    cont.name.toLowerCase().includes(normolizedFilter)
  );

  filter.length === 0
    ? (renderList = contactsGallery)
    : (renderList = filterContacts);

  return (
    <>
      {loading && <Loader />}
      <ListContact>
        {renderList.map(cont => {
          return (
            <ItemContact key={cont.id}>
              <Contact>
                &#9742;
                <NameCont>
                  <span>{cont.name}</span>
                  <span>{cont.number}</span>
                </NameCont>
              </Contact>
              <BtnDelete type="submit" onClick={e => handleDelete(cont.id)}>
                Delete
              </BtnDelete>
            </ItemContact>
          );
        })}
      </ListContact>
    </>
  );
};

ContactsList.propTypes = {
  props: PropTypes.object,
};
