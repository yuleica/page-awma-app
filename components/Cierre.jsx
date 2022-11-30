import React from 'react';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Cierre = () => {
  return (
    <div className={styles.cierre}>
      <Image
        src={"/img/MosaicoWeb.jpg"}
        height={100}
        width={150}
        alt="mosaico"
        className={styles.logo} 
      />
    </div>
  )
}
