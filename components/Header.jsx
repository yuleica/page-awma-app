import React from 'react';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.divinterno}>
          <Image
            src={"/img/logotipoAWMA.png"}
            height={500}
            width={350}
            alt="AWMA"
            className={styles.headerlogo} 
          />
      </div>
    </div>
  )
}
