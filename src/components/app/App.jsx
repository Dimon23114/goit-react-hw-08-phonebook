import Form from "../form/Form";
import Contacts from "../contacts/Contacts";
import Filter from "../filter/Filter";
import { DivBox, TitleBox, SecondaryTitleBox } from "./AppStyled";


export function App () {

    return (
      <DivBox>
         
       <TitleBox>Phonebook</TitleBox>

       <Form/>
        <SecondaryTitleBox>Contacts</SecondaryTitleBox>

       <Contacts/>
       <Filter/>

      </DivBox>
    );
  };

