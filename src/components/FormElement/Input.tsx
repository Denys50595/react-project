interface Props {
  label: string;
  type: string;
  placeholder: string;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
}

const Input = ({
  label,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
}: Props) => {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    </div>
  );
};

export default Input;
