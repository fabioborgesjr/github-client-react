import { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";

interface IProps {
  label?: string;
  id?: string;
  helperId?: string;
  helperText?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: any;
}

function Input({
  label,
  id,
  helperId,
  type,
  helperText,
  placeholder,
  value,
  style,
  onChange,
}: IProps) {
  return (
    <div style={style}>
      {label && <Form.Label htmlFor={id}>Password</Form.Label>}
      <Form.Control
        placeholder={placeholder}
        type={type}
        id={id}
        aria-describedby={helperId}
        value={value}
        onChange={onChange}
      />
      <Form.Text id={helperId} muted>
        {helperText}
      </Form.Text>
    </div>
  );
}

export default Input;
