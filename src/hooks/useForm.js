import { useState } from "react";

/**
 * names
 * first lastname
 * second lastname
 * born date
 * email
 * address
 * country code
 * cellphone
 * telephone (opt)
 * passport number
 * credit card number
 * credit card expiring date
 * cvv
 * emergency contact data (checkbox)
 *          - names
 *          - first lastname
 *          - second lastname
 *          - born date
 *          - email
 *          - address
 *          - country code
 *          - cellphone
 */

const useForm = () => {
    const initialState = {
        name: '',
        validName: undefined,
        firstLastname: '',
        validFirstLastname: undefined,
        secondLastname: '',
        validSecondLastname: undefined,
        bornDate: '',
        validBornDate: undefined,
        email: '',
        validEmail: undefined,
        address: '',
        validAddress: undefined,
        country_code: '',
        validCountryCode: undefined,
        
        cellphone: '',
        telephone: '',
        passport_number: '',
        card_number: '',
        card_expiring_date: '',
        cvv: 0,
        emergency_contact: false,

    };

    const [ formValues, setFormValues ] = useState({ ...initialState });     
    const resetForm = () => setFormValues({ ...initialState });

    const onNameChange = e => {
        let validName = false;
        if(e.target.value.length > 0) validName = true;
        setFormValues(previousFormValues => ({
            ...previousFormValues,
            name: e.target.value,
            validName
        }));
    };

    const onFirstLastNameChange = e => {
        let validFirstLastname = false;
        if(e.target.value.length > 0) validFirstLastname = true;
        setFormValues(previousFormValues => ({
            ...previousFormValues,
            firstLastname: e.target.value,
            validFirstLastname
        }));
    };

    const onSecondLastNameChange = e => {
        let validSecondLastName = false;
        if(e.target.value.length > 0) validSecondLastName = true;
        setFormValues(previousFormValues => ({
            ...previousFormValues,
            secondLastname: e.target.value,
            validSecondLastname
        }));
    };

    const onBornDateChange = e => {
        let validBornDate = false;
        if(e.target.value.length > 0 && e.target.value.match("^[0-9]+/[0-9]+/[0-9]+$")) validEmail = true;
        setFormValues(prevFormValues => ({  
          ...prevFormValues,
          email: e.target.value,
          validEmail
        }));
    };

    const onEmailChange = e => {
        let validEmail = false;
        if(e.target.value.length > 0 && e.target.value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")) validEmail = true;
        setFormValues(prevFormValues => ({  
          ...prevFormValues,
          email: e.target.value,
          validEmail
        }));
    };

    
};