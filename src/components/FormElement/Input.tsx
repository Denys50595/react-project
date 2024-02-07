import { Control, FieldValues, useController } from "react-hook-form";

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
  control: Control<FieldValues>;
  name: string;
}

const Input: React.FC<Props> = ({
  type,
  label,
  placeholder,
  control,
  name,
}: Props) => {
  const { field } = useController({ control, name });

  return (
    <div>
      <label>
        {label}
        <input {...field} type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
