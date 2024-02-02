interface Props {
  label: string;
  type: string;
  value: boolean | any;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Checkbox = ({ label, type, value, onChange }: Props) => {
  return (
    <div>
      <label>
        {label}
        <input type={type} value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Checkbox;
