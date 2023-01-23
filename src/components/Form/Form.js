import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { FormBox, LabelBox, MainInput, AddBTN } from "./Form.styled";

export const SubmitForm = ({handleForm}) => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    useEffect(() => { }, [name, number])
    
    const handleChange = evt => {
        const { name, value } = evt.target
        switch (name) {
            case "name":
                setName(value)
                break;
            case "number":
                setNumber(value)
                break;
        
            default:
                return
        }
    }

    const onFormSubmit = evt => {
        evt.preventDefault()
        handleForm(name, number)
        reset()
    }
    const reset = () => {
        setName("")
        setNumber("")
    }

        return (
            <FormBox onSubmit={onFormSubmit}>
                <LabelBox>Name <br/>
                    <MainInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required/>
                </LabelBox> <br/>
                <LabelBox>Number <br/>
                    <MainInput
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required/>
                </LabelBox> <br/>
                <AddBTN type="submit">Add contact</AddBTN>
            </FormBox>
    )
}
        
SubmitForm.propTypes = {
    handleForm: PropTypes.func.isRequired
}