import React from 'react';

import { Navbar } from '../components/Navbar';
import {Awma} from '../components/Awma';
import {Innovaciones} from '../components/Innovaciones';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Cierre } from '../components/Cierre';


export default function Home() {
  return (
    <div>
        <Header />
        <Navbar />
        <Awma />
        <Innovaciones />
        <Footer />
        <Cierre />
    </div>
  )
}
