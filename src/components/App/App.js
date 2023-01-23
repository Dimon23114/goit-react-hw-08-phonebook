import { ContactSection } from "components/ContactSection/ContactSection";
import { SubmitForm } from "components/Form/Form";
import { useEffect, useState } from "react";
import { Container, Title } from "./App.styled";
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { nanoid } from "nanoid";

export const AppForm = () => {
    const [contacts, setContacts] = useLocalStorage("contacts", [])
    const [filter, setFilter] = useState("")

    const addFormInfo = (name, number) => {
        const allContactsName = contacts.map(contact => contact.name.toLowerCase())
        if (allContactsName.includes(name.toLowerCase())) {
            alert(`${name} is already in contacts`)
        }
        else {
            setContacts(prevState => {
                const newContact = { id: nanoid(), name, number }
                return [...prevState, newContact]})
        }
    }
    const filterChange = evt => {
        setFilter(evt.currentTarget.value)
    }
    const filtering = () => {
        const normalizedFilter = filter.toLowerCase();
        if (filter.length) {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(normalizedFilter),
            )
        } else {
            return contacts;
        }
    }
    const onDeleteContact = id => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }

    useEffect(() => {

    }, [filter, contacts])
    return (
        <Container>
            <Title>Phonebook</Title>
            <SubmitForm handleForm={addFormInfo}/>
            {contacts.length !== 0 &&
                <ContactSection value={filter} onChange={filterChange} filterItem={filtering} onDelete={onDeleteContact} />
            }
        </Container>
        )
}