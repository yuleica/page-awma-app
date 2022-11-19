import React from 'react';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.divinterno}>
          <Image
            src={"/img/Logotipo_AWMA_SinT.jpg"}
            height={250}
            width={200}
            alt="AWMA"
            className={styles.headerlogo} 
          />
      </div>
    </div>
  )
}
