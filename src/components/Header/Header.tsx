import React from 'react'
import styles from './header.module.css'
import Links from './Links'
export const Header:React.FC = () => {
  return (
    <div className={styles.container}>
            <Links/>
    </div>
  )
}
