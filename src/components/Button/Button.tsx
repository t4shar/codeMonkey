import React from 'react';
import './button.css';
interface Data {
  link?: string;
  text: string;
  style?: string;
  onClick?: () => void;
}

const Button: React.FC<Data> = ({ link, text, style, onClick }) => {
  return (
    <div>
      {link ? (
        <a href={link}>
          <button  className={style}>{text}</button>
        </a>
      ) : (
        <button onClick={onClick} className={style}>{text}</button>
      )}
    </div>
  );
};

export default Button;
