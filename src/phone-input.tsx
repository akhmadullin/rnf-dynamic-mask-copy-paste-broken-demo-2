import React, { FC, useState } from 'react';
import { PatternFormat } from 'react-number-format';

const PHONE_LENGTH = 10;

const leaveOnlyNumbersInString = (stringWithNumbers: string): string => {
    return stringWithNumbers.replace(/\D/gm, '');
};

const normalizePhone = (phoneNumber: string) => {
    if (phoneNumber.length <= PHONE_LENGTH) {
        return phoneNumber;
    }

    if ((phoneNumber[0] === '7' || phoneNumber[0] === '8')) {
        return phoneNumber.slice(1, 11);
    }

    return phoneNumber.slice(0, 10);
};

const PhoneInput: FC = () => {
    const [value, setValue] = useState('');
    const [allowEmptyFormatting, setAllowEmptyFormatting] = useState(false);

    const isEmpty = value === '';

    return (
        <PatternFormat 
            type="tel" 
            mask={isEmpty ? undefined : '_'}
            format={isEmpty ? '+7 (#' : '+7 (###) ###-####'}
            placeholder="+7 (___) ___-____"
            allowEmptyFormatting={allowEmptyFormatting}
            valueIsNumericString
            value={value}
            onValueChange={(values) => {
                console.log('values', values);
                
                setValue(values.value);
            }}
            onPaste={(event) => {
                const pastedText = leaveOnlyNumbersInString(event.clipboardData.getData('Text'));

                if (pastedText.length < PHONE_LENGTH) {
                    return;
                }

                event.preventDefault();

                setValue(normalizePhone(pastedText));
            }}
            onFocus={() => {
                setAllowEmptyFormatting(true);
            }}
            onBlur={() => {
                setAllowEmptyFormatting(false);
            }}
        />
    );
};

export default PhoneInput;
