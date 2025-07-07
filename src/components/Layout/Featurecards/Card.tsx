import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './card.module.css'
interface Data {
  name: string;
  description: string;
  icon?: IconDefinition;
  path?: string;
}

const Card: React.FC<Data> = ({ name, description, icon, path }) => {
  return (
    <div className={`w-full md:w-1/2 lg:w-1/3 p-5 my-5 text-center h-[300px] ${styles.card}` }>
    <a href={path}>
      <div className='rounded-xl boxShadow p-3 h-full flex flex-col ' >
      <div className='font-bold font-lg my-3'>
      {icon && <FontAwesomeIcon icon={icon} />}
      </div>
      <h2 className='mb-3'>{name}</h2>
      <p>{description}</p>
      </div>
    </a>
    </div>
  );
};

export default Card;
