
import styled from "styled-components";
export const FormInput = ({
  labelName,
  inputType,
  placeholder,
  id,
  ...rest
}) => {
  return (
    <ContainerFormInput className="container">
      <LabelFormInput   htmlFor={id}>{labelName}</LabelFormInput>
      <InputFormInput
        type={inputType}
        placeholder={placeholder || " "}
        id={id}
        {...rest}
      />
    </ContainerFormInput>
  );
};

//style
const ContainerFormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 48rem;
  height: 5, 68rem;
  background: #ad9be9;
  border-radius: 12px;
  margin-top: 5%;
`;
const InputFormInput = styled.input`
  width: 340px;
  height: 39px;
  background: #ffffff;
  border-radius: 8px;
  margin-left: 30%;
  margin-bottom: 2%;
`;
const LabelFormInput = styled.label`
  margin-left: 30%;
  width: 125px;
  height: 1.2rem;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  color: black;
`
