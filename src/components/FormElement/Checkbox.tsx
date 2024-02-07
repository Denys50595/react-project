import { Control, FieldValues, useController } from "react-hook-form";

interface Props {
  label: string;
  onChange?: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  control: Control<FieldValues>;
  name: string;
}

const Checkbox: React.FC<Props> = ({ label, control, name }) => {
  const { field } = useController({ name, control });
  return (
    <div>
      <label>
        {label}
        <input {...field} type="checkbox" />
      </label>
    </div>
  );
};

export default Checkbox;
