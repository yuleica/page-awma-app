import React from 'react';

import styles from '../styles/Otro.module.css';

export const Awma = () => {

  return (
    <div className={styles.container} id="awma">
        <section className={styles.container}>
          <div className={styles.gridawma}>
            <div className={styles.cardawma1}>
              <p className={styles.titleawma}>AWMA</p>
              <p className={styles.titleawma}>Alimentos Inteligentes & Saludables SpA</p>
              <p className={styles.descriptionawma}>
                Nuestras productos los generamos a partir de
                recetas familiares, y una permanente experimentación.
              </p>
              <p className={styles.descriptionawma}>
                Somos socios cooperados de Cooperativa de
                Trabajo PEWENLAB Ltda., relación que nos
                ha permitido desarrollar una mejor estrategia
                de producción, innovación y crecimiento.</p>            
            </div>
            <div className={styles.cardawma2}>
                <p className={styles.descriptionawma}>
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
