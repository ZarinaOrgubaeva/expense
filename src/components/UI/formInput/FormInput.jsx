import "./FormInput.css";
export const FormInput = ({labelName, inputType, placeholder, id, ...rest }) => {
  return (
    <div className="container">
      <label htmlFor={id}>{labelName}</label>
      <input type={inputType} 
      placeholder={placeholder || " "} 
      id={id}
      {...rest}/>
    </div>
  );
};
