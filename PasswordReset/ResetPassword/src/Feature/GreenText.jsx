import "../App.css";
const GreenText = ({ requirement, data }) => {
  return (
    <div>
      <h3 className={requirement.lowerCase ? "green" : "red"}>
        one lowercase character
      </h3>
      <h3 className={requirement.upperCase ? "green" : "red"}>
        one uppercase character
      </h3>
      <h3 className={requirement.number ? "green" : "red"}>one number</h3>
      <h3 className={requirement.specialCharacter ? "green" : "red"}>
        one special character
      </h3>
      <h3 className={data.length > 5 ? "green" : "red"}>Strong password</h3>
    </div>
  );
};

export default GreenText;
