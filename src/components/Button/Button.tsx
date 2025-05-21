import React from 'react';
import './button.css';
interface Data {
  link?: string;
  text: string;
  style?: string;
}

const Button: React.FC<Data> = ({ link, text, style }) => {
  return (
    <div>
      {link ? (
        <a href={link}>
          <button className={style}>{text}</button>
        </a>
      ) : (
        <button className={style}>{text}</button>
      )}
    </div>
  );
};

export default Button;
