import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';


const BasicPhoneInput = () => {
  const [phone, setPhone] = useState();

  return (
    <div>
      <label>Phone Number:</label>
      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
        defaultCountry="US"
      />
      <p>Current value: {phone}</p>
    </div>
  );
};

export default BasicPhoneInput;