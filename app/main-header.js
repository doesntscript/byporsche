import Link from "next/link";

import logoImg from '@/assets/logo.png';

import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <>
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="the horse represents strength, the red and black stripes on either side are reflective of the traditional crest colours of Württemberg-Hohenzollern" />
        Porsche Meet
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/exhibition"> Browse Exhibition</Link>
                </li>
                <li>
                    <Link href="/environment"> Exhibition Environment </Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}
