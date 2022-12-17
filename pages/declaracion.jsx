import React from 'react';
import Link from 'next/link';

import styles from '../styles/Otro.module.css';

export default function declaracion(){

  return (
    <div className={styles.container}>
        <section className={styles.container}>
          <div className={styles.gridawma}>
            <div className={styles.cardawma1}>
              <p className={styles.titleawma}>Declaración de Accesibilidad</p>
              <p className={styles.descriptionawma}>Alimentos Inteligentes & Saludables SpA. trabajamos por mantener el presente sitio web con las mejores prácticas de accesibilidad 
                  para nuestros visitantes, en particular para organizaciones del territorio de Chile.</p>
              <p className={styles.descriptionawma}>Buscamos implementar los estándares y recomendaciones de W3C Web Accessibility Initiative (WAI). Agradeceremos 
                  a todos nuestros visitantes contactarnos para sugerirnos sus mejoras y observaciones.</p>    
            </div>
          </div>
          <div className={styles.gridawma}>
            <Link  
              href="/"
              className={styles.boton}>Ir a Inicio
            </Link>
          </div>
        </section>

    </div>
  )
}
