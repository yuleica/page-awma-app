import React from 'react';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Innovaciones = () => {
  return (
    <div className={styles.container} id="innovaciones">

        <div className={styles.divseccion}>
          <h2>Nuestras Innovaciones</h2>
        </div>
        <div className={styles.divinterno}>
          <div className={styles.card}>
            <h2>Pastas Untables</h2>
          </div>
          <div className={styles.card}>
            <h2>Snacks</h2>
          </div>
          <div className={styles.card}>
            <h2>Hamburguesas Veganas</h2>
          </div>
        </div>
        <div className={styles.divinterno}>
            <div className={styles.card}>
              <Image
                src={"/img/s-l500.jpg"}
                height={350}
                width={350}
                alt="orgánico"
                className={styles.logo} 
              />
            </div>
            <div className={styles.card}>
              <Image
                src={"/img/SUGAR_FREE.jpg"}
                height={550}
                width={550}
                alt="sin azúcar"
                className={styles.logo} 
              />

            </div>
            <div className={styles.card}>
              <Image
                src={"/img/16_sin_conservantes_0.jpg"}
                height={350}
                width={350}
                alt="orgánico"
                className={styles.logo} 
              />
            </div>

          </div>

      </div>
  )
}
