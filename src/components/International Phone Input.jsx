import{ useState } from 'react';
import PhoneInput, {  getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const InternationalPhoneInput = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("US");

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    // Reset phone when country changes
    setPhone("");
  };

  return (
    <div>
      <label>Country and Phone:</label>
      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
        country={country}
        onCountryChange={handleCountryChange}
        international
        countrySelectProps={{ unicodeFlags: true }}
      />
      
      <div>
        <p>Selected Country: {country}</p>
        <p>Country Code: +{getCountryCallingCode(country)}</p>
        <p>Phone Number: {phone}</p>
      </div>
    </div>
  );
};

export default InternationalPhoneInput;