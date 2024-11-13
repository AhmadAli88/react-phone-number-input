import './App.css';
import BasicPhoneInput from './components/Basic';
import CustomStyledPhoneInput from './components/CustomStyled';
import PhoneForm from './components/FormValidation';
import InternationalPhoneInput from './components/International Phone Input';
import RegistrationForm from './components/Phone Input in a Registration Form';

function App() {
  return (
    <div>
      <BasicPhoneInput />
      <PhoneForm/>
      <CustomStyledPhoneInput/>
      <InternationalPhoneInput/>
      <RegistrationForm/>
    </div>
  );
}

export default App;
