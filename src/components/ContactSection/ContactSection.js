import { ContactList } from "components/ContactList/ContactList";
import { FilterBox } from "components/Filter/Filter";
import { TopText } from "components/App/App.styled";
import PropTypes from 'prop-types';

export const ContactSection = ({value, onChange, filterItem, onDelete }) => {
    return (
        <>
        <TopText>Contacts</TopText>
        <FilterBox value={value} onChange={onChange}/>
        <ContactList filtered={filterItem} onDelete={onDelete} />
        </>
    )
}

ContactSection.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    filterItem: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}