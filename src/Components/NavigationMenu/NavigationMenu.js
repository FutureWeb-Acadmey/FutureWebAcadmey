import Link from 'next/link';
import React from 'react'
import styles from './menu.module.css'

const NavigationMenu = () => {
  return (
    <>
    <div className={styles.menuWrappper}>
      <div className={styles.logoWrapper}>Logo</div>
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/about">About US</Link>
      <Link href="/contect">Contect</Link>
    </nav>
    </div>
    </>
  )
}

export default NavigationMenu