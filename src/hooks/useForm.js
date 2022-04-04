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

    }
};