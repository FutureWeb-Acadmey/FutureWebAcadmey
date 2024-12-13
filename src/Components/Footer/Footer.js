import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.FooterCont}>

     <section className={styles.FooterBox1}>
        <img src='/images/logo.png' />
        <p>Helping ambitious learners upskill themselves & shift to top product based companies.</p>
     </section>
     <section className={styles.FooterBox2}>
        <h3>Free Resources</h3>
        <ul>
            <li>Attend Free Event</li>
            <li>Blog</li>
            <li>Informative Docs</li>
        </ul>
     </section>
     <section className={styles.FooterBox3}>
     <h3>Who are we</h3>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Reviews</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Pricing and Refund Policy</li>
        </ul>
     </section>
     <section className={styles.FooterBox4}>
        <h3>Conetct Us</h3>
        <p><span>E-mail : </span> ask@feturewebacadmey.com</p>
        <p><span>Address : </span> 34/1 Purba Sinthee Road Dum Dum Kolkata : 700030</p>
     </section>


    </div>
  )
}

export default Footer