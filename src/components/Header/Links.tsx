'use client';
import React, { useState } from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode ,faDownload , faQuestion , faUser} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { usePathname } from 'next/navigation'
import Link from "next/link";
type LinkItem = {
  title: string;
  path: string;
  icon?: IconDefinition;
};

function Links() {
  const path = usePathname();
  console.log(path);
  const [login, setLogin] = useState(true);
  const LinkArr: LinkItem[] = [
    {
      title: 'Code Editor',
      path: '/ide/compiler  ',
      icon: faCode,
    },
    {
      title: 'Saved Code',
      path: '/mycodes',
      icon: faDownload
    },
    {
      title: 'Problemset',
      path: '/problems',
      icon : faQuestion
    },
  ];

  return (
    <div className={styles.Links}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faCode} />
        <h2>CodeMonkey</h2>
      </div>
      <ul className={styles.LinkItems}>
        {LinkArr.map((item, index) => (
          <li key={index} className= { path.startsWith(item.path) ? 'active' : '' }>
            {item.icon && <FontAwesomeIcon icon={item.icon} />}
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
        {
          login && <li ><FontAwesomeIcon icon={faUser} /> Profile</li>
        }
      </ul>
    </div>
  );
}

export default Links;
