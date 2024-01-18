import "./Button.css";

interface Props {
  title: string;
  btnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, btnClick }: Props) => {
  return (
    <button onClick={btnClick} className="custom-btn">
      {title}
    </button>
  );
};

export default Button;
