import "./Button.css";

interface Props {
  title: string;
  btnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton = ({ title, btnClick }: Props) => {
  return (
    <button onClick={btnClick} className="add-btn">
      {title}
    </button>
  );
};

export default PrimaryButton;
