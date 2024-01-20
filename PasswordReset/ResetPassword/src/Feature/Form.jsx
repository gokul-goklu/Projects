import { useState } from "react";
import GreenText from "./GreenText";

const Form = () => {
  const lowercaseLetters = /[a-z]/g;
  const uppercaseLetters = /[A-Z]/g;
  const numberRegEx = /[0-9]/g;
  const splChar = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
  const [data, setData] = useState("");
  const [requirement, setRequirment] = useState({
    length: 0,
    lowerCase: false,
    upperCase: false,
    number: false,
    specialCharacter: false,
  });

  const onValidate = (e) => {
    let validation = { ...requirement };
    let text = e.target.value;
    console.log(text.length);
    if (lowercaseLetters.test(text[text.length - 1]) && !text.length == 0) {
      validation = { ...validation, lowerCase: true };
    } else if (!lowercaseLetters.test(e.target.value)) {
      validation = { ...validation, lowerCase: false };
    }

    if (uppercaseLetters.test(text[text.length - 1])) {
      validation = { ...validation, upperCase: true };
    } else if (!uppercaseLetters.test(e.target.value)) {
      validation = { ...validation, upperCase: false };
    }

    if (numberRegEx.test(text[text.length - 1])) {
      validation = { ...validation, number: true };
    } else if (!numberRegEx.test(e.target.value)) {
      validation = { ...validation, number: false };
    }

    if (splChar.test(text[text.length - 1])) {
      validation = { ...validation, specialCharacter: true };
    } else if (!splChar.test(e.target.value)) {
      validation = { ...validation, specialCharacter: false };
    }

    setData(e.target.value);
    setRequirment(validation);
  };

  console.log(requirement);
  return (
    <div className="passResetForm">
      <form>
        <div className="inputField">
          <label> Create a Password</label>
          <br />
          <input type="password" onChange={onValidate} />
        </div>
        <div className="inputField">
          <label> Confirm new Password</label>
          <br />
          <input type="password" />
        </div>
      </form>
      <GreenText requirement={requirement} data={data} />
    </div>
  );
};

export default Form;
