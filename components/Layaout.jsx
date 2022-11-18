import React from 'react';
import Head from 'next/head';

import styles from '../styles/Otro.module.css';
import {Navbar} from './Navbar';
import {Footer} from './Footer';
import {Header} from './Header';


export default function Layaout({children, title, description}) {
  return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
        </Head>
        <header className={styles.header}>

        </header>
        <Navbar />
        <div className={styles.container}>{children}</div>
        <footer><Footer /></footer>
    </div>
  )
}

Layaout.defaultProps = {
    title: "AWMA",
    description: "Descripción de mi Sitio Web"
};