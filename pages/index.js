import React from 'react';

import { Navbar } from '../components/Navbar';
import {Awma} from '../components/Awma';
import {Innovaciones} from '../components/Innovaciones';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


export default function Home() {
  return (
    <div>
        <Header />
        <Navbar />
        <Awma />
        <Innovaciones />
        <Footer />
    </div>
  )
}
