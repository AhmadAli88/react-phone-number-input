import { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';


const PhoneForm = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!phone) {
      setError("Phone number is required");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setError("Invalid phone number");
      return;
    }

    setError("");
    console.log("Valid phone number:", phone);
    // Process the form...
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Phone Number:</label>
        <PhoneInput
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
          error={error}
          defaultCountry="US"
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PhoneForm;