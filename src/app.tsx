import React, { FC } from 'react';
import PhoneInput from './phone-input';

const App: FC = () => {
    return (
        <div>
            <h1>react-number-format v5.2.2, dynamic mask and copy+paste demo</h1>
            <p>Copy phone number <i>9995554433</i> and paste it into the input</p>
            <PhoneInput />
            <p>Cursor will be stayed at the position, where it was before pasting - it seems to be a bug (cursor is expected to be moved to the end of the inserted text)</p>
        </div>
    );
};

export default App;
