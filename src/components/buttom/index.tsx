import React, { useEffect } from 'react';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  block?: 'block' | 'hidden' | 'grid';
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'teal'
    | 'light';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
  let classText = props.className;
  if (props.className == null) {
    classText = '';
  }

  const { children, block, color, disabled, type, onClick } = props;

  let classes = `active:scale-[.98] active:duration-75 hover:scale-[1.01] transition-all ease-in-out ${block} my-2 p-2.5 rounded-lg classText `;

  if (props.color == 'light') {
    classes += `bg-white text-gray-800`;
  } else {
    classes += "bg-" + props.color.trim() + "-700 text-white";
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
