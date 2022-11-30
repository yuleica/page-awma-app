import React from 'react';
import {Link} from 'react-scroll/modules';
import Links from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';


export const Navbar = () => {
  return (
    <div className={styles.grid}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="awma" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}   
                  >
                    AWMA
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="innovaciones" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Nuestras Innovaciones 
                  </Link>
                </li>
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Facebook_W.png"}
                      height={40}
                      width={40}
                      alt="facebook"
                      className={styles.logo} 
                    />
                  </Links>
                </li> 
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Twitter_W.png"}
                      height={40}
                      width={40}
                      alt="twitter"
                      className={styles.logo} 
                    />
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Instagram_W.png"}
                      height={40}
                      width={40}
                      alt="instagram"
                      className={styles.logo} 
                    />
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Linkedin_W.png"}
                      height={40}
                      width={40}
                      alt="linkedin"
                      className={styles.logo} 
                    />
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Whatsapp_W.png"}
                      height={40}
                      width={40}
                      alt="whatsapp"
                      className={styles.logo} 
                    />
                  </Links>
                </li>
            </ul>
        </nav>
    </div>
  
  )
}
