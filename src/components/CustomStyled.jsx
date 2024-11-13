import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const CustomStyledPhoneInput = () => {
  const [phone, setPhone] = useState();

  const customStyles = {
    container: {
      width: '300px',
      marginBottom: '20px'
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    country: {
      width: '100%',
      marginBottom: '10px'
    }
  };

  return (
    <div style={customStyles.container}>
      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
        defaultCountry="US"
        className="custom-phone-input"
        inputStyle={customStyles.input}
        buttonStyle={customStyles.country}
      />
    </div>
  );
};

export default CustomStyledPhoneInput;

// // Add this CSS
// const styles = `
//   .custom-phone-input .PhoneInputCountry {
//     margin-right: 10px;
//   }

//   .custom-phone-input .PhoneInputInput {
//     border-radius: 4px;
//     border: 1px solid #ccc;
//     padding: 8px;
//     font-size: 16px;
//   }

//   .custom-phone-input .PhoneInputInput:focus {
//     outline: none;
//     border-color: #007bff;
//     box-shadow: 0 0 0 2px rgba(0,123,255,.25);
//   }
// `;