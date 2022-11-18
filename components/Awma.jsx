import React from 'react';

import styles from '../styles/Otro.module.css';

export const Awma = () => {

  return (
    <div className={styles.container} id="awma">

        <section className={styles.main}>
          <div className={styles.divinterno}>
            <div className={styles.card}>
              <h2 className={styles.title}>AWMA</h2>
              <h2 className={styles.title}>Alimentos Inteligentes & Saludables SpA</h2>
              <p className={styles.description}>
                Nuestras productos los generamos a partir de
                recetas familiares, y una permanente experimentación.
              </p>
              <p className={styles.description}>
                Somos socios cooperados de Cooperativa de
                Trabajo PEWENLAB Ltda., relación que nos
                ha permitido desarrollar una mejor estrategia
                de producción, innovación y crecimiento.</p>
            </div>
          </div>
          <div className={styles.divinterno}>
            <div className={styles.card}>
              <p className={styles.description}>
                Junto a PewenLab, somos un organismo
                miembro de Polo Empresarial ODS Cero,
                comunidad empresarial con la cual generamos
                un quehacer permanente de sostenibilidad e
                impactos en comunidades locales
              </p> 
            </div>
          </div>
        </section>

    </div>
  )
}
