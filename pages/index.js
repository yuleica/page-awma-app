import React from 'react';

import { Navbar } from '../components/Navbar';
import {Awma} from '../components/Awma';
import {Innovaciones} from '../components/Innovaciones';
import { Footer } from '../components/Footer';


export default function Home() {
  return (
    <div>
        <Navbar />
        <Awma />
        <Innovaciones />
        <Footer />
    </div>
  )
}
