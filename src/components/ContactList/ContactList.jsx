import React from 'react';
import PropTypes from 'prop-types';
import { DeleteButton, List } from './ContactListStyled';

export function ContactList ({ items, deleteContacts }) {
    const elements = items.map(({ name, number, id }) => {
        return (
            <List key={id}>
                {name} : {number} <DeleteButton onClick={() => deleteContacts(id)}>Delete</DeleteButton>
            </List>
        );
    });
    return <ul>{elements}</ul>;
}

ContactList.PropTypes = {
    items: PropTypes.array.isRequired,
    deleteContacts: PropTypes.func.isRequired,
};